'use client';

import React from 'react';
import AgentList from '@/components/AgentList';
import SeoGuideSection from '@/components/SeoGuideSection';
import { useSettings } from '@/context/SettingsContext';

export default function MasterAgentPage() {
  const { siteName } = useSettings();

  return (
    <div>
      <section className="hero-section">
        <h1 className="hero-banner-title">OFFICIAL MASTER AGENTS</h1>
        <p className="hero-subtitle">Official Master Agents of {siteName}. 100% Verified.</p>
      </section>
      <AgentList category="Master" title="VERIFIED MASTER AGENTS" />
      <SeoGuideSection />
    </div>
  );
}
