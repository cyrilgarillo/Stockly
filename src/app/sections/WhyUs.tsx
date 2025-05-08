'use client';

import React from 'react';
import './whyUs.css';
import InflationCalculator from '../components/InflationCalculator';
import ReturnCalculator from '../components/ReturnCalculator';
import SectionTitle from '../components/SectionTitle';
import WhyInvest from '../components/WhyInvest';


const staticItems = [


  {
    id: 2,
    title: 'Kaufkraft berechnen',
    content: 'Mit unserem Inflationsrechner kannst du sehen, wie dein Geld durch Inflation an Wert verliert. Wenn du das Geld einfach auf dem Sparkonto deponierst, wird es regelrecht "aufgefressen"!',
  },
  {
    id: 3,
    title: 'Rendite simulieren',
    content: 'Mit unserem Renditerechner kannst du herausfinden, wie stark dein Kapital bei regelmäßigen Investitionen über die Jahre wachsen kann – ideal für den langfristigen Vermögensaufbau.',
  },

];

export default function WhyUs() {
  return (
    <section id="why-us" className="why-us">
      <div className="container">
        <SectionTitle title="why-us" subtitle="Warum unsere Plattform?" />
        <p className="why-us-info">
        Viele Menschen unterschätzen die langfristigen Folgen von Nicht-Investieren:
📉 Inflation lässt dein Geld mit der Zeit an Kaufkraft verlieren.
💸 Die gesetzliche Rente reicht oft nicht aus, um den gewohnten Lebensstandard im Alter zu sichern.
📈 Durch frühzeitiges und regelmässiges Investieren kannst du der Rentenlücke aktiv entgegenwirken und langfristig Vermögen aufbauen, um finanziell abgesichert zu sein.
</p>
<div className="row">
  {staticItems.map((item) => (
    <div
      key={item.id}
      className={`${
        item.id === 1 ? 'col-12' : 'col-lg-6 col-md-6'
      } d-flex align-items-stretch mb-4`}
    >
      <div className="box">
        <h4>{item.title}</h4>
        <p>{item.content}</p>

        {/* Dynamische Komponenten basierend auf der ID */}
        {item.id === 1 && <WhyInvest />}
        {item.id === 2 && <InflationCalculator />}
        {item.id === 3 && <ReturnCalculator />}

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
