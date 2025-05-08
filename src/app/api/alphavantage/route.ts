// src/app/api/alphavantage/route.ts

import { NextResponse } from 'next/server';

const TICKERS = ['SPY', 'QQQ', 'AAPL', 'MSFT', 'GOOGL', 'AMZN', 'META', 'TSLA'];
const API_KEY = process.env.ALPHAVANTAGE_API_KEY; // in .env.local speichern

export async function GET() {
  const results = await Promise.all(
    TICKERS.map(async (symbol) => {
      const res = await fetch(
        `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`
      );
      const data = await res.json();
      const quote = data['Global Quote'];

      return {
        symbol,
        price: parseFloat(quote['05. price']),
        change: parseFloat(quote['09. change']),
        changePercent: quote['10. change percent'],
      };
    })
  );

  return NextResponse.json(results);
}
