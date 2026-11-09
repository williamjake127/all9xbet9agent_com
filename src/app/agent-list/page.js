'use client';

import React from 'react';
import AgentList from '@/components/AgentList';
import SeoGuideSection from '@/components/SeoGuideSection';
import { useSettings } from '@/context/SettingsContext';

export default function AgentListPage() {
  const { siteName } = useSettings();

  return (
    <div>
      <section className="hero-section">
        <h1 className="hero-banner-title">ALL VERIFIED AGENTS</h1>
        <p className="hero-subtitle">Official Directory of {siteName} Master, Super, Admin &amp; Sub Admin Agents.</p>
      </section>
      <AgentList category="All" title="OFFICIAL AGENT DIRECTORY" />
      <SeoGuideSection />
    </div>
  );
}
