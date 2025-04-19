'use client';

import React, { useState, useEffect } from 'react';
import './Anlageemphelung.css';
import SectionTitle from '../components/SectionTitle';

export default function Anlageemphelung({
  profil,
  stimmung,
  vix,
  sp500,
  globalSentimentScore,
  globalSentimentLabel,
  fearGreedValue,
  fearGreedLabel,
  cryptoFearGreedValue,
  cryptoFearGreedLabel
}: {
  profil: string | null;
  stimmung: string;
  vix: number | null;
  sp500: number | null;
  globalSentimentScore: number | null;
  globalSentimentLabel: string;
  fearGreedValue: number | null;
  fearGreedLabel: string;
  cryptoFearGreedValue: number | null;
  cryptoFearGreedLabel: string;
}) {
  const [eingabe, setEingabe] = useState(profil || '');
  const [antwort, setAntwort] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSenden = async (promptText: string) => {
    if (!promptText.trim()) return;
    setLoading(true);
    setAntwort('');
    
    try {
      const res = await fetch('/api/chatgpt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: promptText })
      });
    
      if (!res.ok) {
        throw new Error(`Serverfehler: ${res.status}`); // z. B. 500 oder 404
      }
    
      const data = await res.json();
    
      if (!data.result) {
        throw new Error('Ungültige Antwort vom Server.');
      }
    
      setAntwort(data.result);
    } catch (err: any) {
      console.error('Fehler:', err);
      setAntwort('Fehler beim Laden der Empfehlung. Bitte später erneut versuchen.');
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    if (profil) {
      handleSenden(`Welche Anlagestrategie eignet sich für folgendes Profil? ${profil}`);
      setEingabe(`Ich gebe dir nun die Altuelle Marktlage um nacher die Frage zu beantworten. 

        Die aktuelle Einschätzung der Marktlage lautet: '${stimmung}'. Der Volatilitätsindex (VIX) liegt derzeit bei '${vix !== null ? `${vix.toFixed(2)} Punkten` : 'Lädt...'}',
was auf ${vix !== null && vix > 25 ? 'eine erhöhte Unsicherheit' : 'eine moderate Markterwartung'} hindeutet.

Der S&P 500 steht aktuell bei '${sp500 !== null ? `${sp500.toFixed(2)} Punkten` : 'Lädt...'}'. Zum Vergleich: das Allzeithoch liegt bei '6147 Punkten',
womit der aktuelle Wert bei etwa '${sp500 !== null ? `${((sp500 / 6147) * 100).toFixed(1)}%` : '...'}' des Höchststands liegt.

Die globale Marktstimmung, gemessen am AlphaVantage Sentiment Score, beträgt '${globalSentimentScore !== null ? globalSentimentScore.toFixed(4) : 'Lädt...'}'
und wird als '${globalSentimentLabel}' eingestuft.

Der manuell eingetragene CNN Fear & Greed Index liegt bei '${fearGreedValue !== null ? fearGreedValue : 'Lädt...'}' Punkten.
Die Stimmung laut CNN lautet: '${fearGreedLabel}'.

Im Kryptomarkt zeigt der Fear & Greed Index einen aktuellen Wert von '${cryptoFearGreedValue !== null ? cryptoFearGreedValue : 'Lädt...'}',
was der Einstufung '${cryptoFearGreedLabel}' entspricht.

Die Stimmungsindikatoren liefern derzeit ein gemischtes Bild – während die globale Nachrichtenlage leicht optimistisch wirkt,
herrscht sowohl im Aktien- als auch im Kryptomarkt Zurückhaltung.

Welche Anlagestrategie eignet sich für folgendes Profil? ${profil} ?`);
    }
  }, [profil]);



  return (
    <section id="anlageemphelung" className="anlageemphelung">
      <div className="container">
        <SectionTitle title="Anlageempfehlung" subtitle="Unsere Anlageempfehlung für dich" />
        <div className="row">
          <div className="col-lg-12 content">
            <h4 className="mb-3">Stelle eine Frage rund um dein Risikoprofil oder Investments:</h4>
            <textarea
              className="form-control mb-3"
              rows={4}
              value={eingabe}
              onChange={(e) => setEingabe(e.target.value)}
              placeholder="Z.B.: Welche ETFs passen zu einem neutralen Risikoprofil?"
            />
            <button className="btn btn-primary mb-4" onClick={() => handleSenden(eingabe)} disabled={loading}>
              {loading ? 'Wird geladen...' : 'Frage absenden'}
            </button>
            {antwort && (
              <>
                <h5>Antwort von ChatGPT:</h5>
                <p>{antwort}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
