'use client';

import React from 'react';
import Link from 'next/link';
import FaqSection from '@/components/FaqSection';
import { useSettings } from '@/context/SettingsContext';

export default function AboutUsPage() {
  const { siteName } = useSettings();

  return (
    <div style={{ maxWidth: '1200px', margin: '30px auto', padding: '0 15px' }}>
      <div style={{ textAlign: 'center', marginBottom: '25px' }}>
        <span style={{ fontSize: '12px', color: '#f3c346', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase' }}>
          ABOUT US
        </span>
        <h1 style={{ color: '#fff', fontSize: '28px', fontWeight: '800', margin: '8px 0 12px 0' }}>
          Official {siteName} Agent Directory
        </h1>
        <p style={{ color: '#94a3b8', fontSize: '15px', maxWidth: '750px', margin: '0 auto', lineHeight: '1.7' }}>
          {siteName} Agent List is the trusted destination for finding 100% official and verified {siteName} agents. We help users connect with genuine agents, ensuring a secure, transparent, and reliable experience every time.
        </p>
      </div>

      {/* Feature cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '35px' }}>
        <div style={{ background: '#060a12', border: '1px solid rgba(212, 175, 55, 0.25)', borderRadius: '10px', padding: '22px' }}>
          <div style={{ color: '#f3c346', fontSize: '22px', marginBottom: '10px' }}>
            <i className="fa-solid fa-shield-halved"></i>
          </div>
          <h3 style={{ color: '#f3c346', fontSize: '16px', fontWeight: '700', marginBottom: '8px' }}>
            Verified Agents
          </h3>
          <p style={{ color: '#94a3b8', fontSize: '13px', lineHeight: '1.6' }}>
            Every listed agent is manually verified by our team before being published on our platform.
          </p>
        </div>

        <div style={{ background: '#060a12', border: '1px solid rgba(212, 175, 55, 0.25)', borderRadius: '10px', padding: '22px' }}>
          <div style={{ color: '#f3c346', fontSize: '22px', marginBottom: '10px' }}>
            <i className="fa-solid fa-bolt"></i>
          </div>
          <h3 style={{ color: '#f3c346', fontSize: '16px', fontWeight: '700', marginBottom: '8px' }}>
            Fast Response
          </h3>
          <p style={{ color: '#94a3b8', fontSize: '13px', lineHeight: '1.6' }}>
            Find official Master Agents, Admin Agents and Sub Admins quickly with updated information.
          </p>
        </div>

        <div style={{ background: '#060a12', border: '1px solid rgba(212, 175, 55, 0.25)', borderRadius: '10px', padding: '22px' }}>
          <div style={{ color: '#f3c346', fontSize: '22px', marginBottom: '10px' }}>
            <i className="fa-solid fa-lock"></i>
          </div>
          <h3 style={{ color: '#f3c346', fontSize: '16px', fontWeight: '700', marginBottom: '8px' }}>
            Safe &amp; Secure
          </h3>
          <p style={{ color: '#94a3b8', fontSize: '13px', lineHeight: '1.6' }}>
            Avoid fake agents and always connect with trusted and verified {siteName} representatives.
          </p>
        </div>

        <div style={{ background: '#060a12', border: '1px solid rgba(212, 175, 55, 0.25)', borderRadius: '10px', padding: '22px' }}>
          <div style={{ color: '#f3c346', fontSize: '22px', marginBottom: '10px' }}>
            <i className="fa-solid fa-headset"></i>
          </div>
          <h3 style={{ color: '#f3c346', fontSize: '16px', fontWeight: '700', marginBottom: '8px' }}>
            24/7 Support
          </h3>
          <p style={{ color: '#94a3b8', fontSize: '13px', lineHeight: '1.6' }}>
            Our support team is always available to answer your questions and assist you.
          </p>
        </div>
      </div>

      {/* Mission */}
      <div style={{ background: '#060a12', border: '1px solid rgba(212, 175, 55, 0.25)', borderRadius: '10px', padding: '30px', marginBottom: '35px' }}>
        <h2 style={{ color: '#f3c346', fontSize: '20px', marginBottom: '15px' }}>
          Our Mission
        </h2>
        <p style={{ color: '#cbd5e1', lineHeight: '1.8', fontSize: '14px' }}>
          Our goal is to build the safest and most authentic verified agent network for {siteName} players in Bangladesh. With continuous verification, fraud prevention, and 24/7 customer assistance, we ensure every transaction is protected and hassle-free.
        </p>
      </div>

      {/* FAQ Section */}
      <FaqSection />
    </div>
  );
}
