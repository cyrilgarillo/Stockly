'use client';

import React from 'react';
import './whyUs.css';
import WhyUsCard from '../components/WhyUsCard';
import SectionTitle from '../components/SectionTitle';

const staticItems = [
  {
    id: 1,
    title: 'Erfahrung & Kompetenz',
    content: 'Unser Team bringt jahrelange Erfahrung mit und bietet dir eine sichere Grundlage für deinen Einstieg ins Investieren.',
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
        <SectionTitle title="why-us" subtitle="Why Choose Our Platform" />
        <div className="row">
          {staticItems.map((item) => (
            <WhyUsCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
