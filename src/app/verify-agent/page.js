'use client';

import React from 'react';
import AgentList from '@/components/AgentList';
import SeoGuideSection from '@/components/SeoGuideSection';
import { useSettings } from '@/context/SettingsContext';

export default function VerifyAgentPage() {
  const { siteName } = useSettings();

  return (
    <div>
      <section className="hero-section">
        <h1 className="hero-banner-title">VERIFY {siteName} AGENT</h1>
        <p className="hero-subtitle">Enter Agent ID or Name below to verify legitimacy before transacting.</p>
      </section>
      <AgentList category="All" title="AGENT VERIFICATION SYSTEM" />
      <SeoGuideSection />
    </div>
  );
}
