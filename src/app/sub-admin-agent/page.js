'use client';

import React from 'react';
import AgentList from '@/components/AgentList';
import SeoGuideSection from '@/components/SeoGuideSection';
import { useSettings } from '@/context/SettingsContext';

export default function SubAdminAgentPage() {
  const { siteName } = useSettings();

  return (
    <div>
      <section className="hero-section">
        <h1 className="hero-banner-title">OFFICIAL SUB ADMIN AGENTS</h1>
        <p className="hero-subtitle">Official Sub Admin Agents of {siteName}. 100% Verified.</p>
      </section>
      <AgentList category="Sub Admin" title="VERIFIED SUB ADMIN AGENTS" />
      <SeoGuideSection />
    </div>
  );
}
