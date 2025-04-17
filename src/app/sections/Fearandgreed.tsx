'use client';

import React, { useEffect, useState } from 'react';
import './fearandgreed.css';
import SectionTitle from '../components/SectionTitle';

export default function Fearandgreed() {
  const [vix, setVix] = useState<number | null>(null);
  const [sp500, setSp500] = useState<number | null>(null);
  const [stimmung, setStimmung] = useState<string>('');

  useEffect(() => {
    fetch('/api/marktstimmung')
      .then((res) => res.json())
      .then((data) => {
        setVix(data.vix);
        setSp500(data.sp500);
        setStimmung(data.sentiment);
      })
      .catch(() => setStimmung('Fehler beim Laden der Daten'));
  }, []);

  return (
    <section id="marktstimmung" className="marktstimmung">
      <div className="container">
        <SectionTitle title="Fear & Greed Index (Alternativ)" subtitle="Wie ist die Marktstimmung?" />
        <div className="row">
          <div className="col-lg-6 content">
            <h4>📊 Marktindikatoren</h4>
            <ul>
              <li><strong>VIX (Volatilität):</strong> {vix !== null ? vix : 'Lädt...'}</li>
              <li><strong>S&P 500:</strong> {sp500 !== null ? sp500 : 'Lädt...'}</li>
              <li><strong>Interpretation:</strong> {stimmung}</li>
            </ul>
            <p className="fst-italic text-muted">
              Die Daten stammen live von finnhub.io – je nach Kombination von VIX und S&P 500 ergibt sich eine Einschätzung zur aktuellen Marktstimmung.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
