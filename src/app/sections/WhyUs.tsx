'use client';

import React from 'react';
import './whyUs.css';
import InflationCalculator from '../components/InflationCalculator';
import ReturnCalculator from '../components/ReturnCalculator';
import SectionTitle from '../components/SectionTitle';
import WhyInvest from '../components/WhyInvest';


const staticItems = [
  {
    id: 1,
    title: 'Kaufkraft berechnen',
    content: 'Mit unserem Inflationsrechner kannst du sehen, wie dein Geld durch Inflation an Wert verliert. Wenn du das Geld einfach auf dem Sparkonto deponierst, wird es regelrecht "aufgefressen"!',
  },
  {
    id: 2,
    title: 'Rendite simulieren',
    content: 'Mit unserem Renditerechner kannst du herausfinden, wie stark dein Kapital bei regelmäßigen Investitionen über die Jahre wachsen kann – ideal für den langfristigen Vermögensaufbau.',
  },
  {
    id: 3,
    title: 'Why you should Invest',
    content: 'Mit unseren Tools kannst du dein Risikoprofil bestimmen und passende Investments finden – einfach und verständlich. Um gegen den Wertverlust deines Kapitals anzukämpfen.',
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="why-us">
      <div className="container">
        <SectionTitle title="why-us" subtitle="Warum unsere Plattform?" />
        <div className="row">
          {staticItems.map((item) => (
            <div key={item.id} className="col-lg-4 col-md-6 d-flex align-items-stretch mb-4">
              <div className="box">
                <h4>{item.title}</h4>
                <p>{item.content}</p>

                {/* Dynamische Komponenten basierend auf der ID */}
                {item.id === 1 && <InflationCalculator />}
                {item.id === 2 && <ReturnCalculator />}
                {item.id === 3 && <WhyInvest />}

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
