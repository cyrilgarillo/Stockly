'use client';

import React from 'react';
import './about.css';

const steps = [
  {
    id: 1,
    title: (
      <> 
      1. <br /> Risikoprofil erstellen:
            </>
          ),
    description: 'Beantworte ein paar kurze Fragen zu deiner Risikobereitschaft und deinem Anlagehorizont.',
  },
  {
    id: 2,
    title: (
      <> 
      2. <br /> Aktienempfehlungen erhalten:
            </>
          ),
    description: 'Unser GPT-4-Modell generiert auf dein Profil zugeschnittene Anlagevorschläge.',
  },
  {
    id: 3,
    title: (
      <>
        3. <br />Markt analysieren:
      </>
    ),
    description:
      'Du erhältst einen schnellen Überblick über die aktuelle Marktlage.',
  },
  
  {
    id: 4,
    title:(
      <> 
      4. <br /> Rendite-/Inflations Rechner: 
      </>
          ), 
    description: 'Unsere Rechentools helfen dir, Kaufkraftverluste zu verstehen und Renditen zu berechnen.'
  },
];

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2>Willkommen auf unserer Plattform Stockly für smarte Anlageentscheidungen!</h2>
        <p className="intro">
          Unsere Anwendung unterstützt dich Schritt für Schritt auch wenn du bisher keine Erfahrung im Investieren hast.
        </p>

        <div className="steps-row">
          {steps.map((step) => (
            <div className="step-box" key={step.id}>
              <strong>{step.title}</strong> <br />
              <span>{step.description}</span>
            </div>
          ))}
        </div>

        <p className="conclusion">
          Deine Reise in die Investmentwelt beginnt hier. Transparent, benutzerfreundlich und auf deine Bedürfnisse abgestimmt.
        </p>
      </div>
    </section>
  );
}
