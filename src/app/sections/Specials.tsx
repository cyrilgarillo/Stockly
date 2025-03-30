// src > app > sections > WhyUs.tsx

import React from 'react';
import './specials.css';
import SectionTitle from '../components/SectionTitle';


export default function Specials() {
    return (
        <section id="specials" className="why-specials">
         <div className="container">
        <SectionTitle title="specials" subtitle='specials'/> 
          <div className="row">
            <div
              className="col-lg-6 order-1 order-lg-2"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
            </div>
  
            <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
              <h3>
                Voluptatem dignissimos provident quasi corporis voluptates sit
                assumenda.
              </h3>
              <p className="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              </div>
          </div>
        </div>
      </section>
    );
  }
  