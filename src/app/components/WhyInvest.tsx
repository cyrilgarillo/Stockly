'use client';

import React from 'react';
import './WhyInvest.css';

export default function WhyInvest() {
  return (
    <div className="why-invest">
      <h5>💡 Investieren ist die Lösung</h5>
      <p>
        Wenn du dein Geld einfach auf einem Sparkonto lässt, verliert es durch die Inflation Jahr für Jahr an Wert.
        <br />
        Historisch gesehen erzielten breit gestreute Aktienmärkte jedoch eine jährliche Durchschnittsrendite von rund <strong>7%</strong>.
      </p>

      <div className="comparison-box">
        <div className="side left">
          <h6>🚫 Nur Sparen</h6>
          <ul>
            <li>❌ Inflation frisst Kaufkraft</li>
            <li>❌ Kein Kapitalwachstum</li>
            <li>❌ Risiko: Wertverlust durch Preissteigerung</li>
          </ul>
        </div>
        <div className="side right">
          <h6>✅ Investieren</h6>
          <ul>
            <li>✅ Kapitalzuwachs durch Rendite</li>
            <li>✅ Historisch ca. 7% p.a. bei Aktien</li>
            <li>✅ Kaufkraft nicht nur erhalten, sondern gesteigert</li>
          </ul>
        </div>
      </div>

      <p className="bottom-text">
        
      </p>
    </div>
  );
}
