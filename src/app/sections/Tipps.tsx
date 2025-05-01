'use client';

import React from 'react';
import './tipps.css';
import SectionTitle from '../components/SectionTitle';

// Beispielhafte Tipps als statische Daten
const tipps = [
  {
    id: 1,
    title: 'Früh starten',
    content: 'Je früher du mit dem Investieren beginnst, desto länger kann dein Kapital wachsen – Zinseszins ist dein Freund.',
  },
  {
    id: 2,
    title: 'Diversifikation',
    content: 'Verteile dein Geld auf verschiedene Anlagen – so minimierst du das Risiko und erhöhst die Stabilität.',
  },
  {
    id: 3,
    title: 'Langfristig denken',
    content: 'Lass dich nicht von kurzfristigen Schwankungen verunsichern. Langfristiges Denken zahlt sich aus.',
  },
];

export default function Tipps() {
  return (
    <section id="tipps" className="tipps">
      <div className="container">
        <SectionTitle title="Wissenswertes" subtitle="Tipps" />

        <div className="row">
          {tipps.map((tipp) => (
            <div key={tipp.id} className="col-lg-4 col-md-6 d-flex align-items-stretch mb-4">
              <div className="box">
                <h4>{tipp.title}</h4>
                <p>{tipp.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
