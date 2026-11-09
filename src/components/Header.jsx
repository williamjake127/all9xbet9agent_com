'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useSettings } from '@/context/SettingsContext';

export default function Header() {
  const { siteLogo, siteName, complainWhatsapp } = useSettings();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isAgentSubmenuOpen, setIsAgentSubmenuOpen] = useState(false);

  return (
    <>
      <header data-elementor-type="header" className="elementor-50 site-header-sticky">
        <div className="header-main-con">
          <div className="header-left-wrap">
            {/* Hamburger Icon */}
            <button
              className="hamburger-icon-btn"
              onClick={() => setIsDrawerOpen(true)}
              aria-label="Open Navigation Menu"
            >
              <svg aria-hidden="true" className="e-font-icon-svg e-fas-bars" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
              </svg>
            </button>

            {/* Dynamic Site Logo */}
            <div className="site-logo-wrap">
              <Link href="/">
                <img
                  width="252"
                  height="69"
                  src={siteLogo || '/wp-content/uploads/2026/07/logo.png'}
                  className="attachment-large size-large wp-image-157"
                  alt={`${siteName} Agent List`}
                />
              </Link>
            </div>
          </div>

          {/* Dynamic Complain Button */}
          <div className="header-right-wrap">
            <a
              className="elementor-button elementor-button-link elementor-size-sm complain-header-btn"
              href={`https://wa.me/${String(complainWhatsapp).replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="elementor-button-content-wrapper">
                <span className="elementor-button-icon">
                  <svg aria-hidden="true" className="e-font-icon-svg e-fab-whatsapp" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                    <path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
                  </svg>
                </span>
                <span className="elementor-button-text">Complain</span>
              </span>
            </a>
          </div>
        </div>
      </header>

      {/* Slide Drawer Popup Menu */}
      {isDrawerOpen && (
        <div className="side-drawer-overlay" onClick={() => setIsDrawerOpen(false)}>
          <div className="side-drawer-modal" onClick={(e) => e.stopPropagation()}>
            <div className="side-drawer-top">
              <Link href="/" onClick={() => setIsDrawerOpen(false)}>
                <img
                  width="220"
                  height="60"
                  src={siteLogo || '/wp-content/uploads/2026/07/logo.png'}
                  alt={`${siteName} Agent List`}
                />
              </Link>
              <button
                className="side-drawer-close-btn"
                onClick={() => setIsDrawerOpen(false)}
                aria-label="Close Menu"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>

            <nav className="side-drawer-nav">
              <ul className="side-drawer-menu">
                <li>
                  <Link href="/" onClick={() => setIsDrawerOpen(false)}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/verify-agent" onClick={() => setIsDrawerOpen(false)}>
                    Verify Agent
                  </Link>
                </li>
                <li className="has-submenu-item">
                  <div
                    className="submenu-header"
                    onClick={() => setIsAgentSubmenuOpen(!isAgentSubmenuOpen)}
                  >
                    <span>{siteName} Agent List</span>
                    <i className={`fa-solid fa-caret-${isAgentSubmenuOpen ? 'up' : 'down'}`}></i>
                  </div>
                  {isAgentSubmenuOpen && (
                    <ul className="side-drawer-sub-menu">
                      <li>
                        <Link href="/admin-agent" onClick={() => setIsDrawerOpen(false)}>
                          Admin Agent
                        </Link>
                      </li>
                      <li>
                        <Link href="/sub-admin-agent" onClick={() => setIsDrawerOpen(false)}>
                          Sub Admin Agent
                        </Link>
                      </li>
                      <li>
                        <Link href="/master-agent" onClick={() => setIsDrawerOpen(false)}>
                          Master Agent
                        </Link>
                      </li>
                      <li>
                        <Link href="/super-agent" onClick={() => setIsDrawerOpen(false)}>
                          Supar Agent
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <Link href="/about-us" onClick={() => setIsDrawerOpen(false)}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us" onClick={() => setIsDrawerOpen(false)}>
                    Contact Us
                  </Link>
                </li>
                <li style={{ borderTop: '1px solid rgba(212,175,55,0.15)', marginTop: '15px', paddingTop: '10px' }}>
                  <Link href="/admin" onClick={() => setIsDrawerOpen(false)} style={{ color: '#d4af37' }}>
                    <i className="fa-solid fa-lock" style={{ marginRight: '8px' }}></i> Admin Login
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
