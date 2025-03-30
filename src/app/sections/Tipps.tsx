

import React from 'react';

import './tipps.css';

import SectionTitle from '../components/SectionTitle';

async function getWhyUsData() {
  const res = await fetch('http://localhost:3000/api/whyus');
  return res.json();
}

export default async function WhyUs() {
  const items: [] = await getWhyUsData();

  return (
    <section id="tipps" className="tipps">
      <div className="container">
        <SectionTitle title="Wissenswertes" subtitle='Tipps'/> 
      </div>
    </section>
  );
}