'use client';

import React, { useState, useEffect } from 'react';
import './Anlageemphelung.css';
import SectionTitle from '../components/SectionTitle';

export default function Anlageemphelung({ profil }: { profil: string | null }) {
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
        body: JSON.stringify({ prompt: promptText }),
      });

      const data = await res.json();
      setAntwort(data.result);
    } catch (err) {
      setAntwort('Fehler beim Laden der Empfehlung.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (profil) {
      handleSenden(`Welche Anlagestrategie eignet sich für folgendes Profil? ${profil}`);
      setEingabe(`Welche Anlagestrategie eignet sich für folgendes Profil? ${profil} TEST`);
    }
  }, [profil]);

  return (
    <section id="anlageempfehlung" className="why-Anlageemphelung">
      <div className="container">
        <SectionTitle title="Anlageempfehlung" subtitle="Deine individuelle Frage an ChatGPT" />

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
