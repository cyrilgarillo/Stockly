'use client';

import React from 'react';
import './whyUs.css';
import InflationCalculator from '../components/InflationCalculator';
import SectionTitle from '../components/SectionTitle';

const staticItems = [
  {
    id: 1,
    title: 'Kaufkraft erhalten',
    content: 'Mit unserem Inflationsrechner kannst du sehen, wie dein Geld durch Inflation an Wert verliert – und wie du mit klugen Investments entgegenwirken kannst.',
  },
  {
    id: 2,
    title: 'Nachhaltige Strategien',
    content: 'Wir zeigen dir, wie du langfristig und nachhaltig investieren kannst – ohne auf schnelle Gewinne zu setzen.',
  },
  {
    id: 3,
    title: 'Einfache Tools',
    content: 'Mit unseren Tools kannst du dein Risikoprofil bestimmen und passende Investments finden – einfach und verständlich.',
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="why-us">
      <div className="container">
        <SectionTitle title="why-us" subtitle="Warum unsere Plattform?" />
        <div className="row">
          {staticItems.map((item) => (
            <div key={item.id} className="col-lg-4 col-md-6 d-flex align-items-stretch mb-4">
              <div className="box">
                <h4>{item.title}</h4>
                <p>{item.content}</p>
                {item.id === 1 && <InflationCalculator />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
