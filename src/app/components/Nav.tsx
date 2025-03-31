'use client';

import React, { useState, useEffect } from 'react';
import { navs } from '../data/data';
import { useRouter, usePathname } from 'next/navigation';
import './nav.css';

export default function Nav() {
  const pathname = usePathname();
  const router = useRouter();
  const [navList, setNavList] = useState(navs);
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        setScroll(window.scrollY);
        handleNavActive(); // aktiviere Sections beim Scroll
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []); // Nur einmal beim Mount

  const handleToggleMenu = () => {
    setOpen(!open);
  };

  const handleScrollTo = (section: string) => {
    if (typeof window !== 'undefined') {
      const header = document.querySelector('#header');
      const targetEl = document.querySelector('#' + section);
      if (!targetEl || !header) return;

      const offset = (header as HTMLElement).offsetHeight;
      const elementPosition = (targetEl as HTMLElement).offsetTop;

      if (pathname === '/') {
        window.scrollTo({
          top: elementPosition - offset,
          behavior: 'smooth',
        });
      } else {
        router.push(`/#${section}`);
      }
    }
  };

  const handleNavActive = () => {
    if (typeof window !== 'undefined') {
      const position = window.scrollY + 200;

      setNavList(
        navList.map(nav => {
          const targetSection = document.querySelector('#' + nav.target);
          nav.active = false;

          if (targetSection) {
            const el = targetSection as HTMLElement;
            if (
              position >= el.offsetTop &&
              position <= el.offsetTop + el.offsetHeight
            ) {
              nav.active = true;
            }
          }

          return nav;
        })
      );
    }
  };

  return (
    <nav
      id="navbar"
      className={`navbar order-last order-lg-0 ${open ? 'navbar-mobile' : ''}`}
    >
      <ul>
        {navList.map(nav => (
          <li key={nav.id}>
            <a
              className={`nav-link scrollto ${nav.active ? 'active' : ''}`}
              onClick={() => handleScrollTo(nav.target)}
            >
              {nav.name === 'Home' ? (
                <i className="bi bi-house-door-fill"></i>
              ) : (
                nav.name
              )}
            </a>
          </li>
        ))}
      </ul>
      <i
        className="bi bi-list mobile-nav-toggle"
        onClick={handleToggleMenu}
      />
    </nav>
  );
}
