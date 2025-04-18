import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const vixRes = await fetch('https://query1.finance.yahoo.com/v8/finance/chart/^VIX');
    const sp500Res = await fetch('https://query1.finance.yahoo.com/v8/finance/chart/^GSPC');

    const vixData = await vixRes.json();
    const sp500Data = await sp500Res.json();

    const vix = vixData.chart.result[0].meta.regularMarketPrice;
    const sp500 = sp500Data.chart.result[0].meta.regularMarketPrice;

    return NextResponse.json({
      vix,
      sp500,
      sentiment: interpretStimmung(vix, sp500),
    });
  } catch (error) {
    console.error('Fehler beim Abrufen der Yahoo-Finance-Daten:', error);
    return NextResponse.json({ vix: null, sp500: null, sentiment: 'Fehler beim Laden' }, { status: 500 });
  }
}

function interpretStimmung(vix: number, sp500: number): string {
  if (vix > 30) return 'Extreme Unsicherheit';
  if (vix > 25 && sp500 < 4500) return 'Angespannte Stimmung';
  if (vix < 20 && sp500 > 5000) return 'Positive Stimmung mit geringer Volatilität';
  if (vix < 18 && sp500 > 5200) return 'Optimistische Ruhe';
  return 'Gemischte Stimmung';
}
