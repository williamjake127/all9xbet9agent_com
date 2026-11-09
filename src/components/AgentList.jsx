'use client';

import React, { useState, useEffect, useRef } from 'react';
import AgentCard from './AgentCard';
import SearchSection from './SearchSection';
import { useSettings } from '@/context/SettingsContext';
import { getCachedAgents, setCachedAgents, subscribeSync } from '@/lib/syncChannel';

export default function AgentList({ category = 'All', title = 'VERIFIED AGENTS LIST' }) {
  const { siteName, replaceVelki } = useSettings();

  // Instant 0ms hydration from client cache
  const [agents, setAgents] = useState(() => {
    if (typeof window !== 'undefined') {
      const cached = getCachedAgents();
      if (cached && Array.isArray(cached)) {
        if (!category || category === 'All') return cached;
        return cached.filter(a => a.category?.toLowerCase() === category.toLowerCase());
      }
    }
    return [];
  });

  const [loading, setLoading] = useState(() => {
    if (typeof window !== 'undefined') {
      const cached = getCachedAgents();
      if (cached && Array.isArray(cached)) return false;
    }
    return true;
  });

  const [searchQuery, setSearchQuery] = useState('');
  const isFirstMount = useRef(true);

  // Background fetch function (SWR - Stale While Revalidate)
  const fetchAgents = async (showLoadingIfEmpty = false) => {
    if (showLoadingIfEmpty && agents.length === 0) {
      setLoading(true);
    }

    try {
      // Add timestamp to bypass any browser/HTTP intermediate caches completely
      const url = category && category !== 'All'
        ? `/api/agents?category=${encodeURIComponent(category)}&_t=${Date.now()}`
        : `/api/agents?_t=${Date.now()}`;

      const res = await fetch(url, {
        cache: 'no-store',
        headers: {
          'Pragma': 'no-cache',
          'Cache-Control': 'no-cache'
        }
      });
      const data = await res.json();

      if (data.success && Array.isArray(data.data)) {
        setAgents(data.data);

        // If fetching all agents, update the global cache
        if (!category || category === 'All') {
          setCachedAgents(data.data);
        } else {
          // If category-specific, merge/update category items in global cache
          const existing = getCachedAgents() || [];
          const otherCategories = existing.filter(a => a.category?.toLowerCase() !== category.toLowerCase());
          const merged = [...otherCategories, ...data.data];
          setCachedAgents(merged);
        }
      }
    } catch (err) {
      console.error('Error fetching agents:', err);
    } finally {
      setLoading(false);
    }
  };

  // On category change or initial mount
  useEffect(() => {
    // Check if category changed after initial mount
    if (isFirstMount.current) {
      isFirstMount.current = false;
      // If we have cached agents, show them instantly, then revalidate in background
      const cached = getCachedAgents();
      if (cached && Array.isArray(cached)) {
        const filtered = (!category || category === 'All')
          ? cached
          : cached.filter(a => a.category?.toLowerCase() === category.toLowerCase());
        setAgents(filtered);
        setLoading(false);
        fetchAgents(false); // Silent background revalidate
      } else {
        fetchAgents(true); // First time visitor fetch
      }
    } else {
      // Switched category: update immediately from cache first if available
      const cached = getCachedAgents();
      if (cached && Array.isArray(cached)) {
        const filtered = (!category || category === 'All')
          ? cached
          : cached.filter(a => a.category?.toLowerCase() === category.toLowerCase());
        setAgents(filtered);
        setLoading(false);
        fetchAgents(false);
      } else {
        fetchAgents(true);
      }
    }
  }, [category]);

  // Subscribe to instant cross-tab and in-tab updates from AdminPanel
  useEffect(() => {
    const unsubscribe = subscribeSync((event) => {
      if (event.type === 'AGENTS_UPDATED') {
        const payloadAgents = event.payload?.agents;
        if (Array.isArray(payloadAgents)) {
          const filtered = (!category || category === 'All')
            ? payloadAgents
            : payloadAgents.filter(a => a.category?.toLowerCase() === category.toLowerCase());
          setAgents(filtered);
          setLoading(false);
          return;
        }
      }

      // Fallback: read latest cache or trigger background fetch
      const cached = getCachedAgents();
      if (cached && Array.isArray(cached)) {
        const filtered = (!category || category === 'All')
          ? cached
          : cached.filter(a => a.category?.toLowerCase() === category.toLowerCase());
        setAgents(filtered);
        setLoading(false);
      }
      fetchAgents(false);
    });

    return () => {
      unsubscribe();
    };
  }, [category]);

  const filteredAgents = agents.filter(agent => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase().trim();
    return (
      agent.name?.toLowerCase().includes(q) ||
      agent.agentId?.toLowerCase().includes(q) ||
      agent.area?.toLowerCase().includes(q) ||
      agent.category?.toLowerCase().includes(q) ||
      agent.role?.toLowerCase().includes(q) ||
      agent.whatsapp?.includes(q)
    );
  });

  return (
    <div className="agent-wrapper" id="agent_wrap_447">
      {/* Search Input Section */}
      <SearchSection
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Section Badge Header */}
      <div className="section-badge">
        <img
          decoding="async"
          src="/wp-content/uploads/2026/07/Screenshot_3.png"
          alt={`Verified ${siteName} Agents`}
        />
        <div className="badge-content">
          <h3>{replaceVelki(title)}</h3>
          <p>All agents are 100% verified by {siteName} Team</p>
        </div>
        <img
          decoding="async"
          src="/wp-content/uploads/2026/07/Screenshot_2.png"
          alt={`Verified ${siteName} Agents`}
        />
      </div>

      {/* Agent Cards Grid */}
      <div className="agent-list">
        {loading && agents.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '40px', color: '#f3c346' }}>
            <i className="fa-solid fa-spinner fa-spin" style={{ fontSize: '24px', marginRight: '10px' }}></i>
            Loading verified agents...
          </div>
        ) : filteredAgents.length === 0 ? (
          <div className="no-agents-found" style={{ textAlign: 'center', padding: '40px', color: '#f3c346', fontSize: '15px' }}>
            <i className="fa-solid fa-circle-exclamation" style={{ marginRight: '8px' }}></i>
            {searchQuery ? `No agent found matching "${searchQuery}".` : 'No verified agents available at this time.'}
          </div>
        ) : (
          filteredAgents.map((agent, idx) => (
            <AgentCard
              key={agent._id || agent.agentId || idx}
              agent={agent}
              index={idx}
            />
          ))
        )}
      </div>
    </div>
  );
}
