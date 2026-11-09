'use client';

import React from 'react';
import AgentList from '@/components/AgentList';
import SeoGuideSection from '@/components/SeoGuideSection';
import { useSettings } from '@/context/SettingsContext';

export default function SuperAgentPage() {
  const { siteName } = useSettings();

  return (
    <div>
      <section className="hero-section">
        <h1 className="hero-banner-title">OFFICIAL SUPER AGENTS</h1>
        <p className="hero-subtitle">Official Super Agents of {siteName}. 100% Verified.</p>
      </section>
      <AgentList category="Super" title="VERIFIED SUPER AGENTS" />
      <SeoGuideSection />
    </div>
  );
}
