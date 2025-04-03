'use client';

import React, { useState } from 'react';
import './riskprofile.css';
import SectionTitle from '../components/SectionTitle';

export default function Riskprofile() {
  const questions = [
    {
      id: 1,
      question: 'Wie stufen Sie Ihr Risikoverhalten beim Anlegen ein?',
      options: [
        { label: 'Konservativ', value: 1 },
        { label: 'Ausgewogen', value: 3 },
        { label: 'Aggressiv', value: 5 },
      ],
    },
    {
      id: 2,
      question:
        'Was würden Sie tun? 50% Chance auf CHF 6’000 Gewinn, 50% Risiko CHF 7’000 Verlust, oder nichts riskieren?',
      options: [
        { label: 'Ich wähle die riskante Option (A)', value: 5 },
        { label: 'Ich wähle die sichere Option (B)', value: 1 },
      ],
    },
    {
      id: 3,
      question: 'Wie haben Sie sich bei finanziellen Verlusten in der Vergangenheit gefühlt?',
      options: [
        { label: 'Kaum berührt', value: 5 },
        { label: 'Unangenehm, aber akzeptabel', value: 3 },
        { label: 'Sehr unangenehm, Angst alles zu verlieren', value: 1 },
      ],
    },
    {
      id: 4,
      question:
        'Wie reagieren Sie, wenn Ihre Anlagen 20% Verlust in einem Jahr machen?',
      options: [
        { label: 'Ich bleibe investiert oder gehe aggressiver vor', value: 5 },
        { label: 'Ich beobachte ein Jahr und entscheide danach', value: 3 },
        { label: 'Ich steige sofort aus', value: 1 },
      ],
    },
  ];

  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [completed, setCompleted] = useState(false);

  const handleAnswer = (value: number) => {
    const updated = [...answers, value];
    setAnswers(updated);
    if (step + 1 < questions.length) {
      setStep(step + 1);
    } else {
      setCompleted(true);
    }
  };

  const getProfileResult = () => {
    const sum = answers.reduce((a, b) => a + b, 0);
    const avg = sum / answers.length;

    if (avg <= 2) return 'Konservativ – Sie bevorzugen Sicherheit und vermeiden Verluste.';
    if (avg <= 3.5) return 'Ausgewogen – Sie akzeptieren moderate Risiken für höhere Chancen.';
    return 'Dynamisch – Sie sind risikofreudig und streben hohe Renditen an.';
  };

  return (
    <section id="riskprofile" className="riskprofile">
      <div className="container" data-aos="fade-up">
        <SectionTitle title="Profil bestimmen" subtitle="Risk Profile" />

        {!completed ? (
          <div className="question-box">
            <h4>{questions[step].question}</h4>
            <div className="options">
              {questions[step].options.map((opt, index) => (
                <button
                  key={index}
                  className="btn-option"
                  onClick={() => handleAnswer(opt.value)}
                >
                  {opt.label}
                </button>
              ))}
            </div>
            <div className="progress mt-3">Frage {step + 1} von {questions.length}</div>
          </div>
        ) : (
          <div className="result-box">
            <h4>Ihr Anlegerprofil</h4>
            <p>{getProfileResult()}</p>
          </div>
        )}
      </div>
    </section>
  );
}
