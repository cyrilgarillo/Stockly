'use client';

import React, { useEffect, useState } from 'react';
import './fearandgreed.css';
import SectionTitle from '../components/SectionTitle';

export default function Fearandgreed() {
  const [vix, setVix] = useState<number | null>(null);
  const [sp500, setSp500] = useState<number | null>(null);
  const [stimmung, setStimmung] = useState<string>('');

  const [globalSentimentScore, setGlobalSentimentScore] = useState<number | null>(null);
  const [globalSentimentLabel, setGlobalSentimentLabel] = useState<string>('');

  const [fearGreedValue, setFearGreedValue] = useState<number | null>(null);
  const [fearGreedLabel, setFearGreedLabel] = useState<string>('');

  const [cryptoFearGreedValue, setCryptoFearGreedValue] = useState<number | null>(null);
  const [cryptoFearGreedLabel, setCryptoFearGreedLabel] = useState<string>('');

  useEffect(() => {
    fetch('/api/marktstimmung')
      .then((res) => res.json())
      .then((data) => {
        setVix(data.vix);
        setSp500(data.sp500);
        setStimmung(data.sentiment);
      })
      .catch(() => setStimmung('Fehler beim Laden der Daten'));

    fetch('/api/marktstimmungglobal')
      .then((res) => res.json())
      .then((data) => {
        setGlobalSentimentScore(data.sentimentScore);
        setGlobalSentimentLabel(data.sentimentLabel);
      })
      .catch(() => setGlobalSentimentLabel('Fehler beim Laden'));

    fetch('/api/cnnfearandgreed')
      .then((res) => res.json())
      .then((data) => {
        setFearGreedValue(data.value);
        setFearGreedLabel(data.label);
      })
      .catch(() => setFearGreedLabel('Fehler beim Laden'));

    fetch('/api/cryptofearandgreed')
      .then((res) => res.json())
      .then((data) => {
        setCryptoFearGreedValue(data.value);
        setCryptoFearGreedLabel(data.label);
      })
      .catch(() => setCryptoFearGreedLabel('Fehler beim Laden'));
  }, []);

  const getZeigerPosition = (score: number | null) => {
    if (score === null) return '0%';
    const pos = ((score + 1) / 2) * 100;
    return `${pos.toFixed(2)}%`;
  };

  return (
    <section id="marktstimmung" className="marktstimmung">
      <div className="container">
        <SectionTitle title="Fear & Greed Index (Alternativ)" subtitle="Wie ist die Marktstimmung?" />

        <div className="content indikator-box">
          <h4>📊 Marktindikatoren</h4>
          <ul>
            <li><strong>VIX (Volatilität):</strong> {vix !== null ? `${vix.toFixed(2)} Punkte` : 'Lädt...'}</li>
            <li><strong>S&P 500:</strong> {sp500 !== null ? `${sp500.toFixed(2)} Punkte` : 'Lädt...'}</li>
            <li><strong>Interpretation:</strong> {stimmung}</li>
          </ul>
          {sp500 !== null && (
            <p className="beschreibung">
              Das Allzeithoch des S&P 500 liegt bei etwa <strong>6147 Punkten</strong>. Der aktuelle Stand beträgt <strong>{sp500.toFixed(2)} Punkte</strong>.
            </p>
          )}
          <p className="fst-italic text-muted">
            Die Daten stammen live von Yahoo Finance – basierend auf aktuellen Indexwerten ergibt sich eine Einschätzung zur Marktstimmung.
          </p>
        </div>

        <div className="grid-2">
          <div className="stimmungs-box">
            <h4>🌍 Globale Marktstimmung (AlphaVantage)</h4>
            <p><strong>Sentiment Score (∅):</strong> {globalSentimentScore !== null ? globalSentimentScore.toFixed(4) : 'Lädt...'}</p>
            <p><strong>Stimmungslabel:</strong> {globalSentimentLabel}</p>
            <div className="skala">
              <div className="zeiger" style={{ left: getZeigerPosition(globalSentimentScore) }}></div>
            </div>
            <p className="beschreibung">
              Basierend auf aktuellen Finanznachrichten mit Themenfokus „financial_markets“.<br />
              Quelle: alphavantage.co
            </p>
          </div>

          <div className="stimmungs-box">
            <h4>🧭 CNN Fear & Greed Index (manuell)</h4>
            <p><strong>Wert:</strong> {fearGreedValue !== null ? fearGreedValue : 'Lädt...'}</p>
            <p><strong>Stimmung:</strong> {fearGreedLabel}</p>
            <div className="skala">
              <div className="zeiger" style={{ left: `${fearGreedValue !== null ? fearGreedValue : 0}%` }}></div>
            </div>
            <p className="beschreibung">
              Manuell eingetragener Wert basierend auf CNN Markets (Aktienmarkt).
            </p>
          </div>

          <div className="stimmungs-box">
            <h4>💰 Crypto Fear & Greed Index</h4>
            <p><strong>Wert:</strong> {cryptoFearGreedValue !== null ? cryptoFearGreedValue : 'Lädt...'}</p>
            <p><strong>Stimmung:</strong> {cryptoFearGreedLabel}</p>
            <div className="skala">
              <div className="zeiger" style={{ left: `${cryptoFearGreedValue !== null ? cryptoFearGreedValue : 0}%` }}></div>
            </div>
            <p className="beschreibung">
              Basierend auf mehreren Krypto-Marktsignalen wie Volatilität, Volumen und Social Media.<br />
              Quelle: alternative.me
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}