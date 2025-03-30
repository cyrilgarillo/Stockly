'use client';

import React, { useState, useEffect } from 'react';
import './header.css';
import AppBtn from './AppBtn';
import Nav from './Nav';
import Link from 'next/link';
export default function Header() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY);
    });
    return () => {
      window.removeEventListener('scroll', () => {
        setScroll(window.scrollY);
      });
    };
  }, [scroll]);

  return (
    <header
      id="header"
      className={`fixed-top d-flex align-items-cente ${
        scroll > 100 ? 'header-scrolled' : undefined
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
  
        {/* Uncomment below if you prefer to use an image logo */}
        {/* <a href="index.html" className="logo me-auto me-lg-0">
          <img src="assets/img/logo.png" alt="" className="img-fluid" />
        </a> */}
        <Nav />
        <AppBtn name="ButtonName"/>
      </div>
    </header>
  );
}
