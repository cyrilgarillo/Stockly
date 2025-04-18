import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const res = await fetch('https://api.alternative.me/fng/');
    const data = await res.json();

    const latest = data.data[0];
    const value = parseInt(latest.value, 10);
    const label = latest.value_classification;

    return NextResponse.json({
      value,
      label
    });
  } catch (error) {
    console.error('Fehler beim Abrufen des Fear & Greed Index:', error);
    return NextResponse.json({ value: null, label: 'Fehler beim Abrufen' }, { status: 500 });
  }
}
