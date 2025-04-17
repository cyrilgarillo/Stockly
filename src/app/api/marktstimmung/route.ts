import { NextRequest, NextResponse } from 'next/server';

const FINNHUB_API_KEY = process.env.FINNHUB_API_KEY as string;

export async function GET(req: NextRequest) {
  try {
    const vixRes = await fetch(`https://finnhub.io/api/v1/quote?symbol=^VIX&token=${FINNHUB_API_KEY}`);
    const sp500Res = await fetch(`https://finnhub.io/api/v1/quote?symbol=^GSPC&token=${FINNHUB_API_KEY}`);

    const vix = await vixRes.json();
    const sp500 = await sp500Res.json();

    return NextResponse.json({
      vix: vix.c,
      sp500: sp500.c,
      sentiment: interpretStimmung(vix.c, sp500.c),
    });
  } catch (error) {
    console.error('Fehler beim Abrufen der Marktdaten:', error);
    return NextResponse.json({ error: 'Fehler beim Abrufen der Daten.' }, { status: 500 });
  }
}

function interpretStimmung(vix: number, sp500: number): string {
  if (vix > 25 && sp500 < 4000) return 'Angespannte Stimmung (hohe Volatilität, fallende Kurse)';
  if (vix < 18 && sp500 > 4200) return 'Ruhige Stimmung mit positivem Trend';
  return 'Gemischte Stimmung';
}
