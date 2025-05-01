'use client';

import React, { useState } from 'react';
import './InflationCalculator.css';


export default function InflationCalculator() {
  const [amount, setAmount] = useState(1000);
  const [inflation, setInflation] = useState(2);
  const [years, setYears] = useState(10);

  const futureValue = amount / Math.pow(1 + inflation / 100, years);

  return (
    <div className="inflation-calculator">
      <h5>💰 Inflationsrechner</h5>
      <p>Berechne, wie viel deine heutige Kaufkraft in Zukunft noch wert ist.</p>

      <label htmlFor="amount">Ursprungsbetrag (€)</label>
      <input
        id="amount"
        type="number"
        value={amount}
        onChange={(e) => setAmount(parseFloat(e.target.value))}
      />

      <label htmlFor="inflation">Inflationsrate (%)</label>
      <input
        id="inflation"
        type="number"
        value={inflation}
        onChange={(e) => setInflation(parseFloat(e.target.value))}
      />

      <label htmlFor="years">Zeitraum (Jahre)</label>
      <input
        id="years"
        type="number"
        value={years}
        onChange={(e) => setYears(parseInt(e.target.value))}
      />

      <div className="result">
        Ergebnis: Bei {inflation}% Inflation sind {amount.toFixed(2)} € in {years} Jahren
        nur noch ca. <strong>{futureValue.toFixed(2)} €</strong> wert.
      </div>
    </div>
  );
}
