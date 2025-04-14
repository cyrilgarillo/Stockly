import { NextRequest, NextResponse } from 'next/server';
import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  const body = await req.json();
  const prompt = body.prompt;

  if (!prompt || prompt.trim() === '') {
    return NextResponse.json({ result: 'Eingabe darf nicht leer sein.' }, { status: 400 });
  }

  try {
    const completion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: prompt }],
      model: 'gpt-4',
    });

    const result = completion.choices[0].message.content;
    return NextResponse.json({ result });
  } catch (error: any) {
    console.error('OpenAI API Fehler:', error?.message, error?.response?.data);
    return NextResponse.json({ result: 'Fehler bei der Generierung der Empfehlung.' }, { status: 500 });
  }
}
