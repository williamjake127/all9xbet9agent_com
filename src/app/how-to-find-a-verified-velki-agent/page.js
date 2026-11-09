'use client';

import React from 'react';
import Link from 'next/link';
import { useSettings } from '@/context/SettingsContext';

export default function BlogPostArticle() {
  const { siteName } = useSettings();

  return (
    <div style={{ maxWidth: '900px', margin: '40px auto', padding: '0 20px' }}>
      <article style={{ background: '#060a12', border: '1px solid rgba(212, 175, 55, 0.25)', borderRadius: '12px', padding: '35px' }}>
        <span style={{ fontSize: '12px', color: '#d4af37', fontWeight: '700', textTransform: 'uppercase' }}>Official Guide &bull; 2026 Edition</span>
        <h1 style={{ color: '#fff', fontSize: '26px', margin: '12px 0 20px 0', lineHeight: '1.4' }}>
          How to Find a 100% Verified {siteName} Agent Safely in 2026
        </h1>

        <img
          src="/wp-content/uploads/2026/07/official-velki-verified-agent-guide-2026-1024x572.webp"
          alt={`Verified ${siteName} Agent Guide`}
          style={{ width: '100%', borderRadius: '8px', marginBottom: '25px' }}
        />

        <div style={{ color: '#cbd5e1', fontSize: '15px', lineHeight: '1.8' }}>
          <p style={{ marginBottom: '18px' }}>
            Finding a 100% verified {siteName} agent is essential to ensure smooth, secure, and hassle-free transactions. With unauthorized individuals attempting to impersonate agents, our official directory makes it effortless to verify legitimate agents instantly.
          </p>

          <h2 style={{ color: '#f3c346', fontSize: '19px', margin: '25px 0 10px 0' }}>
            1. Always Verify the Agent ID
          </h2>
          <p style={{ marginBottom: '18px' }}>
            Before communicating or initiating any deposit/withdrawal, enter the agent's ID in the search box on our <Link href="/" style={{ color: '#fce08a', textDecoration: 'underline' }}>Homepage</Link> or <Link href="/verify-agent" style={{ color: '#fce08a', textDecoration: 'underline' }}>Verify Agent page</Link>. Only proceed if the ID and Name match our verified database.
          </p>

          <h2 style={{ color: '#f3c346', fontSize: '19px', margin: '25px 0 10px 0' }}>
            2. Use Official WhatsApp Links Only
          </h2>
          <p style={{ marginBottom: '18px' }}>
            Never accept direct messages or phone numbers from social media groups. Always click the green <strong>WHATSAPP</strong> button listed directly on the agent's card on this website.
          </p>

          <h2 style={{ color: '#f3c346', fontSize: '19px', margin: '25px 0 10px 0' }}>
            3. Report Any Suspicious Activity
          </h2>
          <p style={{ marginBottom: '25px' }}>
            If anyone claims to be an agent but does not exist on our verified list, please report them immediately using the <strong>Complain</strong> button located at the top of our website.
          </p>
        </div>

        <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/blog" style={{ color: '#8899a6', fontSize: '14px' }}>
            &larr; Back to Guides
          </Link>
          <Link href="/" className="verify-btn">
            CHECK AGENT LIST
          </Link>
        </div>
      </article>
    </div>
  );
}
