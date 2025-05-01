'use client';

import React, { useState } from 'react';
import './ReturnCalculator.css';

export default function ReturnCalculator() {
  const [initialAmount, setInitialAmount] = useState(1000);
  const [monthlySavings, setMonthlySavings] = useState(100);
  const [interestRate, setInterestRate] = useState(5);
  const [years, setYears] = useState(10);

  const months = years * 12;
  const monthlyRate = interestRate / 100 / 12;

  const futureValue =
    initialAmount * Math.pow(1 + monthlyRate, months) +
    monthlySavings * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);

  return (
    <div className="return-calculator">
      <h5>📈 Renditerechner</h5>
      <p>Berechne, wie dein Kapital durch jährliche Rendite und monatliches Sparen wächst.</p>

      <label htmlFor="initialAmount">Ursprungsbetrag (CHF)</label>
      <input
        id="initialAmount"
        type="number"
        value={initialAmount}
        onChange={(e) => setInitialAmount(parseFloat(e.target.value))}
      />

      <label htmlFor="monthlySavings">Monatliche Sparrate (CHF)</label>
      <input
        id="monthlySavings"
        type="number"
        value={monthlySavings}
        onChange={(e) => setMonthlySavings(parseFloat(e.target.value))}
      />

      <label htmlFor="interestRate">Rendite pro Jahr (%)</label>
      <input
        id="interestRate"
        type="number"
        value={interestRate}
        onChange={(e) => setInterestRate(parseFloat(e.target.value))}
      />

      <label htmlFor="years">Zeitraum (Jahre)</label>
      <input
        id="years"
        type="number"
        value={years}
        onChange={(e) => setYears(parseInt(e.target.value))}
      />

      <div className="result">
        Ergebnis: Bei {interestRate}% Rendite jährlich und einer monatlichen Sparrate von {monthlySavings} CHF
        hast du nach {years} Jahren ca. <strong>{futureValue.toFixed(2)} CHF</strong>.
      </div>
    </div>
  );
}
