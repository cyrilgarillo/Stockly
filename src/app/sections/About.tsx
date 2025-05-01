'use client';

import React from 'react';
import './about.css';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="content">
          <h2>Willkommen auf unserer Plattform Stockly für smarte Anlageentscheidungen!</h2>
          <p className="intro">
            Unsere Anwendung unterstützt dich Schritt für Schritt – auch wenn du bisher keine Erfahrung im Investieren hast.
          </p>
          <ul>
            <li><strong>1. Risikoprofil erstellen:</strong> Beantworte ein paar kurze Fragen zu deiner Risikobereitschaft und deinem Anlagehorizont.</li>
            <li><strong>2. Aktienempfehlungen erhalten:</strong> Unser GPT-4-Modell generiert auf dein Profil zugeschnittene Anlagevorschläge – verständlich, individuell, aktuell.</li>
            <li><strong>3. Markt analysieren:</strong> Du erhältst einen schnellen Überblick über die aktuelle Marktlage – mit Indikatoren, Sentimentanalysen und Marktstimmung.</li>
            <li><strong>4. Verantwortungsvoll investieren:</strong> Unsere Tools und Rechentools helfen dir, Kaufkraftverluste zu verstehen und deine Strategie langfristig zu planen.</li>
          </ul>
          <p className="conclusion">
            Deine Reise in die Investmentwelt beginnt hier. Transparent, benutzerfreundlich und auf deine Bedürfnisse abgestimmt.
          </p>
        </div>
      </div>
    </section>
  );
}
