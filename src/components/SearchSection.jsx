'use client';

import React from 'react';

export default function SearchSection({ searchQuery, setSearchQuery, onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(searchQuery);
  };

  return (
    <div className="agent-search-section">
      <div className="search-title">
        <i className="fa-solid fa-shield-halved"></i> VERIFY AGENT ID
      </div>
      <form onSubmit={handleSubmit} className="search-box-container">
        <div className="input-group">
          <i className="fa-solid fa-magnifying-glass search-icon"></i>
          <input
            type="text"
            className="agent-search-input"
            placeholder="Enter Agent ID, Name, Area or Type..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <button type="submit" className="verify-btn search-btn">
          VERIFY NOW <i className="fa-solid fa-arrow-right-long" style={{ marginLeft: '5px' }}></i>
        </button>
      </form>
    </div>
  );
}
