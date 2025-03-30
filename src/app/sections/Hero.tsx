'use client';

import React, { useEffect } from 'react';
import Glightbox from 'glightbox';
import './hero.css';
import HeroBtn from '../components/HeroBtn';

export default function Hero() {
  useEffect(() => {
    new Glightbox({
      selector: '.glightbox',
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
              Why you should Invest <span>In Stocks</span>
            </h1>
            <h2>Alles was du für den Einstig wissen wolltest!</h2>
  
            <div className="btns">
              <HeroBtn name="ButtonName" target="menu" />
              <HeroBtn name="ButtonName" target="book-a-table" />
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
