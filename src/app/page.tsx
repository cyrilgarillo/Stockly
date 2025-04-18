'use client';

import React, { useState } from 'react';
import About from './sections/About';
import Hero from './sections/Hero';
import WhyUs from './sections/WhyUs';
import Tipps from './sections/Tipps';
import Anlageemphelung from './sections/Anlageemphelung';
import Fearandgreed from './sections/Fearandgreed';
import Riskprofile from './sections/Riskprofile';
import Contact from './sections/Contact';

export default function Home() {
  const [profil, setProfil] = useState<string | null>(null);
  const [vix, setVix] = useState<number | null>(null);
  const [sp500, setSp500] = useState<number | null>(null);
  const [stimmung, setStimmung] = useState<string>('');
  const [globalSentimentScore, setGlobalSentimentScore] = useState<number | null>(null);
  const [globalSentimentLabel, setGlobalSentimentLabel] = useState('');
  const [fearGreedValue, setFearGreedValue] = useState<number | null>(null);
  const [fearGreedLabel, setFearGreedLabel] = useState('');
  const [cryptoFearGreedValue, setCryptoFearGreedValue] = useState<number | null>(null);
  const [cryptoFearGreedLabel, setCryptoFearGreedLabel] = useState('');

  return (
    <>
      <Hero />
      <main id="main">
        <About />
        <WhyUs />
        <Tipps />
        <Riskprofile onResult={setProfil} />
        <Anlageemphelung
          profil={profil}
          stimmung={stimmung}
          vix={vix}
          sp500={sp500}
          globalSentimentScore={globalSentimentScore}
          globalSentimentLabel={globalSentimentLabel}
          fearGreedValue={fearGreedValue}
          fearGreedLabel={fearGreedLabel}
          cryptoFearGreedValue={cryptoFearGreedValue}
          cryptoFearGreedLabel={cryptoFearGreedLabel}
        />
        <Fearandgreed
          stimmung={stimmung}
          setStimmung={setStimmung}
          vix={vix}
          setVix={setVix}
          sp500={sp500}
          setSp500={setSp500}
          globalSentimentScore={globalSentimentScore}
          setGlobalSentimentScore={setGlobalSentimentScore}
          globalSentimentLabel={globalSentimentLabel}
          setGlobalSentimentLabel={setGlobalSentimentLabel}
          fearGreedValue={fearGreedValue}
          setFearGreedValue={setFearGreedValue}
          fearGreedLabel={fearGreedLabel}
          setFearGreedLabel={setFearGreedLabel}
          cryptoFearGreedValue={cryptoFearGreedValue}
          setCryptoFearGreedValue={setCryptoFearGreedValue}
          cryptoFearGreedLabel={cryptoFearGreedLabel}
          setCryptoFearGreedLabel={setCryptoFearGreedLabel}
        />
        <Contact />
      </main>
    </>
  );
}