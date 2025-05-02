'use client';

import React from 'react';
import './tipps.css';
import SectionTitle from '../components/SectionTitle';

const tipps = [
  {
    id: 1,
    title: 'Früh starten',
    content: 'Je früher du mit dem Investieren beginnst, desto länger kann dein Kapital wachsen – Zinseszins ist dein Freund.',
  },
  {
    id: 2,
    title: 'Regelmäßig sparen',
    content: 'Spare konsequent und plane mindestens 10 % deines Einkommens für Investitionen ein.',
  },
  {
    id: 3,
    title: 'Notgroschen aufbauen',
    content: 'Bevor du investierst, lege einen Notgroschen von 4–6 Monatsgehältern für Notfälle zurück.',
  },
  {
    id: 4,
    title: 'Langfristig denken',
    content: 'Investiere mit einem Horizont von mehreren Jahren – kurzfristige Schwankungen sind normal.',
  },
  {
    id: 5,
    title: 'Diversifizieren',
    content: 'Verteile dein Geld auf verschiedene Branchen und Anlageklassen, um dein Risiko zu reduzieren.',
  },
  {
    id: 6,
    title: 'Geduld lernen',
    content: 'Der Markt schwankt. Wer geduldig bleibt und nicht in Panik verkauft, wird langfristig belohnt.',
  },
  {
    id: 7,
    title: 'Dividenden bevorzugen',
    content: 'Aktien mit Dividende bringen selbst bei sinkendem Kurs regelmäßige Einnahmen.',
  },
  {
    id: 8,
    title: 'Compound Effect nutzen',
    content: 'Zinseszins wirkt über viele Jahre – bleib investiert und lass dein Kapital arbeiten.',
  },
  {
    id: 9,
    title: 'Nicht auf Tipps hören',
    content: 'Kaufe keine Aktien, nur weil Freunde oder Nachbarn davon sprechen – recherchiere selbst.',
  },
  {
    id: 10,
    title: 'Indexfonds nutzen',
    content: 'Ein ETF auf den S&P 500 oder MSCI World ist kostengünstig, breit gestreut und effektiv.',
  },
  {
    id: 11,
    title: 'Nicht auf Kredit investieren',
    content: 'Nutze niemals geliehenes Geld zum Investieren – das Risiko ist zu hoch.',
  },
  {
    id: 12,
    title: 'Investitionen beobachten',
    content: 'Behalte deine Anlagen regelmäßig im Blick, ohne panisch zu reagieren.',
  },
  {
    id: 13,
    title: 'Mit Aktien Eigentum kaufen',
    content: 'Aktien sind Unternehmensanteile – du beteiligst dich an echten Firmen, nicht an Spekulation.',
  },
  {
    id: 14,
    title: 'Eigenen Stil finden',
    content: 'Finde heraus, ob du eher sicherheitsorientiert oder risikofreudig bist – und investiere entsprechend.',
  },
  {
    id: 15,
    title: 'Vermeide Timing-Versuche',
    content: 'Niemand weiß, wann ein Tief oder Hoch kommt – bleib kontinuierlich investiert.',
  },
  {
    id: 16,
    title: 'Cashreserve behalten',
    content: 'Halte immer etwas Bargeld bereit, um bei günstigen Kursen nachzukaufen.',
  },
  {
    id: 17,
    title: 'Kosten vermeiden',
    content: 'Vermeide unnötige Gebühren durch teure Fonds oder unnötig viele Transaktionen.',
  },
  {
    id: 18,
    title: 'Gold als Beimischung',
    content: 'Halte 5–10 % deines Vermögens in Gold zur Absicherung gegen Krisen.',
  },
  {
    id: 19,
    title: 'Eigenverantwortung übernehmen',
    content: 'Lerne über Geld, Finanzen und Märkte – verlasse dich nicht blind auf Berater.',
  },
  {
    id: 20,
    title: 'Nachhaltig investieren',
    content: 'Berücksichtige ethische, soziale und ökologische Kriterien bei deiner Auswahl.',
  },
  {
    id: 21,
    title: 'Steuern berücksichtigen',
    content: 'Beachte steuerliche Aspekte deiner Investments – sie beeinflussen deine Nettorendite.',
  },
  {
    id: 22,
    title: 'Ziel setzen',
    content: 'Definiere klare Ziele: Wofür investierst du? Altersvorsorge, Haus, finanzielle Freiheit?',
  },
  {
    id: 23,
    title: 'Fehler analysieren',
    content: 'Lerne aus Fehlkäufen und verbessere deine Strategie kontinuierlich.',
  },
  {
    id: 24,
    title: 'Vorsicht bei Hypes',
    content: 'Lass dich nicht von Modetrends wie Meme-Stocks oder Krypto-Hypes leiten.',
  },
  {
    id: 25,
    title: 'Buchführung führen',
    content: 'Behalte Einnahmen, Ausgaben und Investitionen im Überblick – Kontrolle bringt Klarheit.',
  },
];

export default function Tipps() {
  return (
    <section id="tipps" className="tipps">
      <div className="container">
        <SectionTitle title="Wissenswertes" subtitle="Tipps" />
        <div className="tipps-scroll-container">
          <div className="tipps-scroll-row">
            {tipps.map((tipp) => (
              <div key={tipp.id} className="tipps-box">
                <h4>{tipp.title}</h4>
                <p>{tipp.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
