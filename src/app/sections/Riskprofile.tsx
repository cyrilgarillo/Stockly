'use client';

import React, { useState } from 'react';
import './riskprofile.css';
import SectionTitle from '../components/SectionTitle';

export default function Riskprofile({ onResult }: { onResult: (profil: string) => void }) {
  const zeithorizontFragen = [
    {
      question: '1. In wie vielen Jahren will ich beginnen, Geld vom Anlagekonto zu beziehen?',
      options: [
        { label: 'In weniger als drei Jahren', score: 1 },
        { label: 'In drei bis fünf Jahren', score: 3 },
        { label: 'In sechs bis zehn Jahren', score: 7 },
        { label: 'In elf oder mehr Jahren', score: 10 },
      ],
    },
    {
      question:
        '2. Ab dem Zeitpunkt, da ich Geld vom Anlagekonto beziehe, werde ich die gesamte Summe verbrauchen, innerhalb von …',
      options: [
        { label: 'weniger als zwei Jahren', score: 0 },
        { label: 'zwei bis fünf Jahren', score: 1 },
        { label: 'sechs bis zehn Jahren', score: 4 },
        { label: 'elf oder mehr Jahren', score: 8 },
      ],
    },
  ];

  const risikobereitschaftFragen = [
    {
      question: '3. Ich würde meine Kenntnisse über Anlagen wie folgt beschreiben:',
      options: [
        { label: 'Keine Kenntnisse', score: 0 },
        { label: 'Beschränkte Kenntnisse', score: 2 },
        { label: 'Gute Kenntnisse', score: 4 },
        { label: 'Umfassende Kenntnisse', score: 5 },
      ],
    },
    {
      question: '4. Wenn ich Geldanlagen tätige, achte ich …',
      options: [
        { label: 'am meisten auf einen Wertverlust meiner Anlage', score: 0 },
        { label: 'gleichermassen auf einen Wertverlust wie auf Wertzuwachs', score: 4 },
        { label: 'am meisten auf einen Wertzuwachs', score: 8 },
      ],
    },
    {
      question:
        '5. Wählen Sie die risikoreichste Anlage, die Sie besitzen oder je besessen haben:',
      options: [
        { label: 'Geldmarktfonds oder Baranlagen', score: 0 },
        { label: 'Obligationen und/oder Obligationenfonds', score: 3 },
        { label: 'Gemischte Fonds (mit Aktien und Obligationen)', score: 6 },
        { label: 'Einzelaktien oder reine Aktienfonds', score: 8 },
      ],
    },
    {
      question:
        '6. Was tun Sie, wenn eine Ihrer Aktien 25 % verloren hat?',
      options: [
        { label: 'Alle meine Aktien verkaufen', score: 0 },
        { label: 'Einige meiner Aktien verkaufen', score: 2 },
        { label: 'Nichts', score: 5 },
        { label: 'Mehr Aktien kaufen', score: 8 },
      ],
    },
    {
      question: '7. Betrachten Sie die unten stehende Tabelle. Welche Bandbreite von Ergebnissen ist für Sie am ehesten annehmbar?',
      options: [
        { label: 'Durchschnittl. Jahresertrag: 7,2% | Bestes Ergebnis: 16,3% | Schlechtestes Ergebnis: -5,6%', score: 0 },
        { label: 'Durchschnittl. Jahresertrag: 9,0% | Bestes Ergebnis: 25,0% | Schlechtestes Ergebnis: -12,1%', score: 3 },
        { label: 'Durchschnittl. Jahresertrag: 10,4% | Bestes Ergebnis: 33,6% | Schlechtestes Ergebnis: -18,2%', score: 6 },
        { label: 'Durchschnittl. Jahresertrag: 11,7% | Bestes Ergebnis: 42,8% | Schlechtestes Ergebnis: -24,0%', score: 8 },
        { label: 'Durchschnittl. Jahresertrag: 12,5% | Bestes Ergebnis: 50,0% | Schlechtestes Ergebnis: -28,2%', score: 10 },
      ],
    },
  ];

  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [completed, setCompleted] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const allQuestions = [...zeithorizontFragen, ...risikobereitschaftFragen];

  const handleAnswer = (score: number) => {
    const updated = [...answers, score];
    setAnswers(updated);
    if (step + 1 < allQuestions.length) {
      setStep(step + 1);
    } else {
      calculateProfile(updated);
      setCompleted(true);
    }
  };

  const calculateProfile = (allAnswers: number[]) => {
    const zeithorizont = allAnswers[0] + allAnswers[1];

    if (zeithorizont < 3) {
      const profil = 'Kurzer Zeithorizont = 60 % Cash, 40 % Obligationen. Aktienanlagen sind zu volatil.';
      setResult(profil);
      onResult(profil);
      scrollToRecommendation();
      return;
    }

    const risiko = allAnswers.slice(2).reduce((a, b) => a + b, 0);
    let profil = '';

    if (zeithorizont <= 4 && risiko <= 18) profil = 'Konservativ = 20% Aktien, 50% Obligationen, 30% Cash';
    else if (zeithorizont <= 9 && risiko <= 24) profil = 'Defensiv = 40% Aktien, 50% Obligationen, 10% Cash';
    else if (zeithorizont <= 12 && risiko <= 32) profil = 'Neutral = 60% Aktien, 35% Obligationen, 5% Cash';
    else if (zeithorizont <= 18 && risiko <= 36) profil = 'Dynamisch = 80% Aktien, 15% Obligationen, 5% Cash';
    else profil = 'Aggressiv = 95% Aktien, 5% Cash';

    setResult(profil);
    onResult(profil);
    scrollToRecommendation();
  };

  const scrollToRecommendation = () => {
    setTimeout(() => {
      document.getElementById('anlageempfehlung')?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  return (
    <section id="riskprofile" className="riskprofile">
      <div className="container" data-aos="fade-up">
        <SectionTitle title="Profil bestimmen" subtitle="Risikoprofil" />
        <p className="riskprofile-info">
  Beantworte ein paar kurze Fragen, um dein persönliches Risikoprofil zu ermitteln. Anschliessend gibt es automatisierte Anlageempfehlung auf der nächsten seite "Anlageempfehlung".
</p>


        {!completed ? (
          <div className="question-box">
            <h4>{allQuestions[step].question}</h4>
            <div className="options">
              {allQuestions[step].options.map((opt, idx) => (
                <button
                  key={idx}
                  className="btn-option"
                  onClick={() => handleAnswer(opt.score)}
                >
                  {opt.label}
                </button>
              ))}
            </div>
            <div className="progress mt-3">
              Frage {step + 1} von {allQuestions.length}
            </div>
          </div>
        ) : (
        <div className="result-box">
          <h4>Dein Profil: {result}</h4>
          <p>Für Empfehlungen passend zu deinem Profil, siehe den nächsten Abschnitt.</p>
        </div>
        )}
      </div>
    </section>
  );
}
