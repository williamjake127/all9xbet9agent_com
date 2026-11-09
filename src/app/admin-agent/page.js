'use client';

import React from 'react';
import AgentList from '@/components/AgentList';
import SeoGuideSection from '@/components/SeoGuideSection';
import { useSettings } from '@/context/SettingsContext';

export default function AdminAgentPage() {
  const { siteName } = useSettings();

  return (
    <div>
      <section className="hero-section">
        <h1 className="hero-banner-title">OFFICIAL ADMIN AGENTS</h1>
        <p className="hero-subtitle">Official Top-Level Admin Agents of {siteName}. 100% Verified.</p>
      </section>
      <AgentList category="Admin" title="VERIFIED ADMIN AGENTS" />
      <SeoGuideSection />
    </div>
  );
}
