'use client';

import React, { useEffect } from 'react';
import './hero.css';
import HeroBtn from '../components/HeroBtn';

export default function Hero() {
  useEffect(() => {
    // Glightbox nur im Browser laden
    import('glightbox').then((module) => {
      const Glightbox = module.default;
      Glightbox({ selector: '.glightbox' });
    });
  }, []);

  return (
    <section id="hero" className="d-flex align-items-center">
      <div
        className="container position-relative text-center text-lg-start"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <div className="row">
          <div className="col-lg-8">
            <h1>
               Investieren war noch nie so <span>einfach</span>
            </h1>
            <h2>Erhalte individuelle Empfehlungen auf Basis deines Risikoprofils und der aktuellen Marktlage</h2>
            <div className="btns">
              <HeroBtn name="About" target="about" />
              <HeroBtn name="Tipps" target="tipps" />
            </div>
          </div>
          <div
            className="col-lg-4 d-flex align-items-center justify-content-center position-relative"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <a
              href="https://www.youtube.com/watch?v=WNAmZMapIOU"
              className="glightbox play-btn"
            ></a>
          </div>
        </div>
      </div>
    </section>
  );
}


