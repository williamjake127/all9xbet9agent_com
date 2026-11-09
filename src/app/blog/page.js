'use client';

import React from 'react';
import Link from 'next/link';
import { useSettings } from '@/context/SettingsContext';

export default function BlogPage() {
  const { siteName } = useSettings();

  return (
    <div style={{ maxWidth: '1000px', margin: '40px auto', padding: '0 20px' }}>
      <section className="hero-section" style={{ margin: '0 0 30px 0' }}>
        <h1 className="hero-banner-title">SAFETY GUIDES &amp; BLOG</h1>
        <p className="hero-subtitle">Learn how to trade safely and avoid unauthorized fraudulent agents.</p>
      </section>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '25px' }}>
        <div style={{ background: '#060a12', border: '1px solid rgba(212, 175, 55, 0.25)', borderRadius: '10px', overflow: 'hidden' }}>
          <img
            src="/wp-content/uploads/2026/07/official-velki-verified-agent-guide-2026-1024x572.webp"
            alt={`Verified ${siteName} Agent Guide`}
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
          <div style={{ padding: '20px' }}>
            <span style={{ fontSize: '11px', color: '#f3c346', fontWeight: '700', textTransform: 'uppercase' }}>Safety Guide</span>
            <h2 style={{ fontSize: '18px', color: '#fff', margin: '8px 0 12px 0' }}>
              How to Find a 100% Verified {siteName} Agent Safely in 2026
            </h2>
            <p style={{ color: '#8899a6', fontSize: '13px', lineHeight: '1.6', marginBottom: '18px' }}>
              Learn how to find a 100% verified {siteName} agent safely in 2026, check legitimacy, avoid scams, and choose a trusted agent with confidence.
            </p>
            <Link href="/how-to-find-a-verified-velki-agent" className="verify-btn" style={{ fontSize: '12px', padding: '8px 16px', display: 'inline-block' }}>
              READ FULL ARTICLE <i className="fa-solid fa-arrow-right-long" style={{ marginLeft: '6px' }}></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
