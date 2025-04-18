import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    // 🔧 Hier den aktuellen Wert manuell eintragen:
    const numericValue = 21; // z. B. CNN-Wert vom 17. April
    let label = 'Unbekannt';

    if (numericValue < 25) label = 'Extreme Fear';
    else if (numericValue < 45) label = 'Fear';
    else if (numericValue < 55) label = 'Neutral';
    else if (numericValue < 75) label = 'Greed';
    else label = 'Extreme Greed';

    return NextResponse.json({
      value: numericValue,
      label,
    });
  } catch (error) {
    console.error('❌ Fehler beim Abrufen des CNN-Werts:', error);
    return NextResponse.json({ value: null, label: 'Fehler beim Abrufen' }, { status: 500 });
  }
}
