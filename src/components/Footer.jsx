'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSettings } from '@/context/SettingsContext';

export default function Footer() {
  const { siteName } = useSettings();
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsNavVisible(true);
      } else {
        setIsNavVisible(false);
        setIsPopupOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <footer
        data-elementor-type="footer"
        data-elementor-id="172"
        className="elementor elementor-172 elementor-location-footer"
      >
        <div className="elementor-element e-flex e-con-boxed e-con e-parent footer-container">
          <div className="e-con-inner">
            <div className="footer-menu-container">
              <nav aria-label="Menu" className="footer-nav">
                <ul className="footer-nav-menu">
                  <li className="menu-item">
                    <Link href="/blog" className="elementor-item">
                      Blog
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link href="/privacy-policy-2" className="elementor-item">
                      Privacy Policy
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link href="/terms-andconditions" className="elementor-item">
                      Terms andConditions
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="footer-copyright-text">
              &copy; 2026 {siteName} Agent List. All Rights Reserved. | Find Verified Agents with Confidence.
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Floating Bottom Navigation */}
      <nav className={`mobile-bottom-nav ${isNavVisible ? 'visible' : ''}`}>
        <Link href="/" className="nav-item">
          <i className="fa-solid fa-house"></i>
          <span>Home</span>
        </Link>
        <Link href="/verify-agent" className="nav-item">
          <i className="fa-solid fa-shield-halved"></i>
          <span>Verify Agent</span>
        </Link>

        {/* Dynamic Agent List Dropdown Button */}
        <div
          className="nav-item has-popup"
          id="agentListNavBtn"
          onClick={() => setIsPopupOpen(!isPopupOpen)}
        >
          <i className="fa-solid fa-list-check"></i>
          <span>Agent List</span>

          {/* Dynamic Popup Submenu */}
          {isPopupOpen && (
            <div
              className="agent-types-popup show"
              id="agentTypesPopup"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="popup-header">Select Agent Type</div>
              <div className="popup-list">
                <Link
                  href="/agent-list"
                  className="popup-item all-item"
                  onClick={() => setIsPopupOpen(false)}
                >
                  <i className="fa-solid fa-users"></i> All Agents
                </Link>
                <Link
                  href="/admin-agent"
                  className="popup-item"
                  onClick={() => setIsPopupOpen(false)}
                >
                  <i className="fa-solid fa-user-check"></i> Admin
                </Link>
                <Link
                  href="/sub-admin-agent"
                  className="popup-item"
                  onClick={() => setIsPopupOpen(false)}
                >
                  <i className="fa-solid fa-user-check"></i> Sub Admin
                </Link>
                <Link
                  href="/master-agent"
                  className="popup-item"
                  onClick={() => setIsPopupOpen(false)}
                >
                  <i className="fa-solid fa-user-check"></i> Master
                </Link>
                <Link
                  href="/super-agent"
                  className="popup-item"
                  onClick={() => setIsPopupOpen(false)}
                >
                  <i className="fa-solid fa-user-check"></i> Super
                </Link>
              </div>
            </div>
          )}
        </div>

        <Link href="/about-us" className="nav-item">
          <i className="fa-solid fa-circle-info"></i>
          <span>About Us</span>
        </Link>
        <Link href="/contact-us" className="nav-item">
          <i className="fa-solid fa-phone"></i>
          <span>Contact Us</span>
        </Link>
      </nav>
    </>
  );
}
