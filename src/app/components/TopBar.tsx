'use client';

import React, { useState, useEffect } from 'react';
import './topBar.css';

export default function TopBar() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        setScroll(window.scrollY);
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []); // Nur einmal bei Mount

  return (
    <div
      id="topbar"
      className={`d-flex align-items-center fixed-top ${
        scroll > 100 ? 'topbar-scrolled' : ''
      }`}
    >
      <div className="container d-flex justify-content-center justify-content-md-between">
        <div className="contact-info d-flex align-items-center">
          <span>SMI</span>
          <i className="bi d-flex align-items-center ms-4">
            <span> S&P500</span>
          </i>
        </div>

        <div className="languages d-none d-md-flex align-items-center">
          <ul>
            <li>DE</li>
            <li>
              <a href="#">EN</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}