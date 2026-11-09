'use client';

import React from 'react';
import AgentList from '@/components/AgentList';
import SeoGuideSection from '@/components/SeoGuideSection';
import { useSettings } from '@/context/SettingsContext';

export default function HomePage() {
  const { siteName, siteIcon, replaceVelki } = useSettings();

  return (
    <div className="home-page-container">
      {/* Hero Section */}
      <section className="elementor-element-399817a hero-banner-wrapper">
        <div className="hero-banner-inner">
          <div className="hero-banner-content-col">
            <div className="hero-badge-header">
              <h2 className="hero-brand-title">{siteName}</h2>
              <div className="hero-verified-badge">
                <span className="hero-badge-icon">
                  <svg aria-hidden="true" className="e-font-icon-svg e-fas-shield-alt" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path fill="currentColor" d="M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"></path>
                  </svg>
                </span>
                <span className="hero-badge-text">100% OFFICIAL &amp; VERIFIED AGENTS</span>
              </div>
            </div>

            <div className="hero-main-title-box">
              <h1 className="hero-main-title">{siteName} OFFICIAL AGENT LIST</h1>
              <p className="hero-main-description">
                Play Safe, Play Smart! Only deal with verified {siteName} agents.
              </p>
            </div>
          </div>

          {/* Dynamic Hero Illustration / Icon */}
          <div className="hero-banner-image-col">
            <img
              src={siteIcon || '/wp-content/uploads/2026/07/ChatGPT-Image-Jul-27-2026-06_49_47-PM.webp'}
              alt={`Verify ${siteName} Agent list`}
              className="hero-illustration-img"
              width="1402"
              height="1122"
            />
          </div>
        </div>
      </section>

      {/* Stats Counter Grid */}
      <section className="stats-counter-section">
        <div className="stats-counter-inner">
          <div className="counter-box">
            <div className="counter-icon">
              <i className="fa-solid fa-users"></i>
            </div>
            <div className="counter-text">
              <p className="counter-number">1250+</p>
              <p className="counter-label">Total Agents</p>
            </div>
          </div>

          <div className="counter-box">
            <div className="counter-icon">
              <i className="fa-solid fa-shield-halved"></i>
            </div>
            <div className="counter-text">
              <p className="counter-number">100%</p>
              <p className="counter-label">Verified Agents</p>
            </div>
          </div>

          <div className="counter-box">
            <div className="counter-icon">
              <i className="fa-solid fa-headset"></i>
            </div>
            <div className="counter-text">
              <p className="counter-number">24/7</p>
              <p className="counter-label">Customer Support</p>
            </div>
          </div>

          <div className="counter-box">
            <div className="counter-icon">
              <i className="fa-solid fa-lock"></i>
            </div>
            <div className="counter-text">
              <p className="counter-number">100%</p>
              <p className="counter-label">Secure &amp; Safe</p>
            </div>
          </div>
        </div>
      </section>

      {/* Agent List Directory */}
      <AgentList category="All" title="VERIFIED AGENTS LIST" />

      {/* Trust Feature 4 Boxes */}
      <section className="trust-features-section">
        <div className="trust-features-inner">
          <div className="trust-feature-card">
            <div className="trust-card-icon">
              <i className="fa-solid fa-lock"></i>
            </div>
            <div className="trust-card-content">
              <h3 className="trust-card-title">100% SECURE</h3>
              <p className="trust-card-desc">All agents are verified by {siteName} team</p>
            </div>
          </div>

          <div className="trust-feature-card">
            <div className="trust-card-icon">
              <i className="fa-solid fa-headset"></i>
            </div>
            <div className="trust-card-content">
              <h3 className="trust-card-title">24/7 SUPPORT</h3>
              <p className="trust-card-desc">We are always here to help you</p>
            </div>
          </div>

          <div className="trust-feature-card">
            <div className="trust-card-icon">
              <i className="fa-solid fa-shield-halved"></i>
            </div>
            <div className="trust-card-content">
              <h3 className="trust-card-title">TRUSTED AGENTS</h3>
              <p className="trust-card-desc">Connect only with trusted agents</p>
            </div>
          </div>

          <div className="trust-feature-card">
            <div className="trust-card-icon">
              <i className="fa-solid fa-bolt"></i>
            </div>
            <div className="trust-card-content">
              <h3 className="trust-card-title">FAST SERVICE</h3>
              <p className="trust-card-desc">Quick response &amp; instant support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic SEO Article, Guide & FAQ Section */}
      <SeoGuideSection />
    </div>
  );
}
