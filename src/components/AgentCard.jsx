import React from 'react';
import { useSettings } from '@/context/SettingsContext';

export default function AgentCard({ agent, index }) {
  const { siteName, replaceVelki } = useSettings();
  const serial = agent.serial || String(index + 1).padStart(2, '0');
  const cleanWhatsapp = String(agent.whatsapp || '').replace(/[^0-9]/g, '');
  const whatsappUrl = cleanWhatsapp ? `https://wa.me/${cleanWhatsapp}` : '#';
  const avatarImage = agent.image || (index === 0 ? '/wp-content/uploads/2026/07/velki-agent-list.png' : '/wp-content/uploads/2026/07/images.jpg');
  const displayName = replaceVelki(agent.name);
  const displayRole = replaceVelki(agent.role || agent.category);
  const displayArea = replaceVelki(agent.area);

  return (
    <div className="agent-card">
      <div className="agent-serial">{serial}</div>

      <div className="agent-img-box">
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          <img
            decoding="async"
            src={avatarImage}
            alt={displayName || `${siteName} Agent`}
          />
        </a>
      </div>

      <div className="agent-info">
        <div className="name">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            {displayName}
          </a>
          <img
            decoding="async"
            src="/wp-content/uploads/2026/07/social-media.png"
            alt="Social Media"
            className="img-fluid"
          />
        </div>
        <div className="role">{displayRole}</div>
        {displayArea ? (
          <span className="area-tag">
            <i className="fa-solid fa-location-dot"></i> Area: {displayArea}
          </span>
        ) : null}
      </div>

      <div className="id-badge">
        <label>ID:</label>
        <span>{agent.agentId}</span>
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-btn"
      >
        <i className="fa-brands fa-whatsapp"></i> <span>WhatsApp</span>
      </a>

      <div className="verified-tag">
        <i className="fa-solid fa-shield-halved"></i> VERIFIED
      </div>
    </div>
  );
}
