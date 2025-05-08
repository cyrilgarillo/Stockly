'use client';

import React, { useState, useEffect } from 'react';
import './header.css';
import AppBtn from './AppBtn';
import Nav from './Nav';
import Link from 'next/link';

export default function Header() {
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
  }, []); // Nur beim Mount

  return (
    <header
      id="header"
      className={`fixed-top d-flex align-items-cente ${
        scroll > 100 ? 'header-scrolled' : ''
      }`}
    >
      <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">
        <h1 className="logo me-auto me-lg-0">
          <Link href="/" passHref>
            <span style={{ cursor: 'pointer', textDecoration: 'none', color: 'inherit' }}>
              Stockly
            </span>
          </Link>
        </h1>

        <Nav />
        <AppBtn name="Risikoprofil" />
      </div>
    </header>
  );
}
