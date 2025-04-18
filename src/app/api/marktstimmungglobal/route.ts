import { NextRequest, NextResponse } from 'next/server';

const ALPHAVANTAGE_API_KEY = process.env.ALPHAVANTAGE_API_KEY;

export async function GET(req: NextRequest) {
  try {
    const response = await fetch(`https://www.alphavantage.co/query?function=NEWS_SENTIMENT&topics=financial_markets&limit=100&apikey=${ALPHAVANTAGE_API_KEY}`);
    const data = await response.json();

    const articles = data.feed || [];

    // ⬇️ Lösung 1: Typ für scores explizit setzen
    const scores = articles
      .map((item: any) => item.overall_sentiment_score)
      .filter((score: number): score is number => typeof score === 'number') as number[];

    if (scores.length === 0) {
      return NextResponse.json({
        sentimentScore: null,
        sentimentLabel: 'Keine relevanten Daten',
      });
    }

    const average = scores.reduce((a: number, b: number) => a + b, 0) / scores.length;

    // Label anhand des Sentiment-Scores interpretieren
    let label = 'Neutral';
    if (average < -0.35) label = 'Bearish';
    else if (average <= -0.15) label = 'Somewhat-Bearish';
    else if (average < 0.15) label = 'Neutral';
    else if (average < 0.35) label = 'Somewhat-Bullish';
    else label = 'Bullish';

    return NextResponse.json({
      sentimentScore: average,
      sentimentLabel: label,
    });

  } catch (error) {
    console.error('Fehler bei Alpha Vantage API:', error);
    return NextResponse.json({
      sentimentScore: null,
      sentimentLabel: 'Fehler beim Abrufen',
    }, { status: 500 });
  }
}
