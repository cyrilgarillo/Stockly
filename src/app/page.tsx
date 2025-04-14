'use client';

import React, { useState } from 'react';
import About from './sections/About';
import Hero from './sections/Hero';
import WhyUs from './sections/WhyUs';
import Tipps from './sections/Tipps';
import Anlageemphelung from './sections/Anlageemphelung';
import Events from './sections/Events';
import Riskprofile from './sections/Riskprofile';
import Contact from './sections/Contact';

export default function Home() {
  const [profil, setProfil] = useState<string | null>(null);

  return (
    <>
      <Hero />
      <main id="main">
        <About />
        <WhyUs />
        <Tipps />
        <Riskprofile onResult ={setProfil} />
        <Anlageemphelung profil={profil} />
        <Events />
        <Contact />
      </main>
    </>
  );
}
