'use client';

import React from 'react';
import Link from 'next/link';
import FaqSection from '@/components/FaqSection';
import { useSettings } from '@/context/SettingsContext';

export default function ContactUsPage() {
  const { siteName, complainWhatsapp } = useSettings();
  const cleanWhatsapp = String(complainWhatsapp).replace(/[^0-9]/g, '');

  return (
    <div style={{ maxWidth: '1200px', margin: '30px auto', padding: '0 15px' }}>
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <span style={{ fontSize: '12px', color: '#f3c346', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase' }}>
          CONTACT US
        </span>
        <h1 style={{ color: '#fff', fontSize: '28px', fontWeight: '800', margin: '8px 0 12px 0' }}>
          {siteName} agents Here To Help
        </h1>
        <p style={{ color: '#94a3b8', fontSize: '15px', maxWidth: '650px', margin: '0 auto', lineHeight: '1.6' }}>
          Need assistance or agent verification help? Our official support representatives are available around the clock.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '40px' }}>
        <div style={{ background: '#060a12', border: '1px solid rgba(212, 175, 55, 0.25)', borderRadius: '10px', padding: '25px', textAlign: 'center' }}>
          <div style={{ color: '#1fa245', fontSize: '32px', marginBottom: '12px' }}>
            <i className="fa-brands fa-whatsapp"></i>
          </div>
          <h3 style={{ color: '#fff', fontSize: '17px', fontWeight: '700', marginBottom: '8px' }}>
            WhatsApp Support
          </h3>
          <p style={{ color: '#94a3b8', fontSize: '13px', marginBottom: '15px' }}>
            Available 24 Hours for Official Support.
          </p>
          <a
            href={`https://wa.me/${cleanWhatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="wa-btn"
            style={{ display: 'inline-flex', padding: '8px 20px' }}
          >
            <i className="fa-brands fa-whatsapp"></i> <span>Chat on WhatsApp</span>
          </a>
        </div>

        <div style={{ background: '#060a12', border: '1px solid rgba(212, 175, 55, 0.25)', borderRadius: '10px', padding: '25px', textAlign: 'center' }}>
          <div style={{ color: '#f3c346', fontSize: '32px', marginBottom: '12px' }}>
            <i className="fa-solid fa-envelope"></i>
          </div>
          <h3 style={{ color: '#fff', fontSize: '17px', fontWeight: '700', marginBottom: '8px' }}>
            Email
          </h3>
          <p style={{ color: '#94a3b8', fontSize: '13px', marginBottom: '15px' }}>
            support@{siteName.toLowerCase().replace(/[^a-z0-9]/g, '')}agentlist.com
          </p>
          <a
            href={`mailto:support@${siteName.toLowerCase().replace(/[^a-z0-9]/g, '')}agentlist.com`}
            className="verify-btn"
            style={{ display: 'inline-flex', padding: '8px 20px', fontSize: '11px' }}
          >
            SEND EMAIL
          </a>
        </div>

        <div style={{ background: '#060a12', border: '1px solid rgba(212, 175, 55, 0.25)', borderRadius: '10px', padding: '25px', textAlign: 'center' }}>
          <div style={{ color: '#f3c346', fontSize: '32px', marginBottom: '12px' }}>
            <i className="fa-solid fa-clock"></i>
          </div>
          <h3 style={{ color: '#fff', fontSize: '17px', fontWeight: '700', marginBottom: '8px' }}>
            Working Hours
          </h3>
          <p style={{ color: '#94a3b8', fontSize: '13px' }}>
            24 Hours / 7 Days a Week
          </p>
          <span style={{ display: 'inline-block', marginTop: '15px', color: '#00ff66', fontSize: '12px', fontWeight: '700' }}>
            ● Always Online
          </span>
        </div>

        <div style={{ background: '#060a12', border: '1px solid rgba(212, 175, 55, 0.25)', borderRadius: '10px', padding: '25px', textAlign: 'center' }}>
          <div style={{ color: '#f3c346', fontSize: '32px', marginBottom: '12px' }}>
            <i className="fa-solid fa-shield-halved"></i>
          </div>
          <h3 style={{ color: '#fff', fontSize: '17px', fontWeight: '700', marginBottom: '8px' }}>
            Agent Verification
          </h3>
          <p style={{ color: '#94a3b8', fontSize: '13px', marginBottom: '15px' }}>
            Need to verify an agent? Contact us anytime.
          </p>
          <Link
            href="/verify-agent"
            className="verify-btn"
            style={{ display: 'inline-flex', padding: '8px 20px', fontSize: '11px' }}
          >
            VERIFY AGENT ID
          </Link>
        </div>
      </div>

      {/* FAQ Section */}
      <FaqSection />
    </div>
  );
}
