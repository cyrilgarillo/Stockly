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
      model: 'gpt-4.1-2025-04-14',
      messages: [
        
        
        {
          role: "system",
          content: `
        ## PERSISTENCE
        You are an agent  please keep going until the user's query is completely 
        resolved, before ending your turn and yielding back to the user. Only 
        terminate your turn when you are sure that the problem is solved.

        ## TOOL CALLING
        Wenn du dir bei Marktinformationen, Aktienprofilen oder Indizes nicht sicher bist, verwende externe Tools oder Datenquellen, um die benötigten Informationen abzurufen.
        Rate niemals  gib keine Vermutungen oder hypothetische Antworten, wenn du auf konkrete Daten angewiesen bist.
        
        ## PLANNING
        Du musst jeden Schritt deiner Analyse gründlich planen, bevor du Empfehlungen aussprichst. Reflektiere nach jedem Abschnitt, ob deine Einschätzung schlüssig ist.
        Triff keine Empfehlungen ohne gedankliche Zwischenschritte.
        Wenn du Tools verwendest, integriere die Ergebnisse bewusst in deine Argumentation und bewerte sie kritisch.
        `
        },
        
        {             
        role: 'user', content: prompt 
      }
    
    
    
    
    
    ],
    });

    const result = completion.choices[0].message.content;
    return NextResponse.json({ result });
  } catch (error: any) {
    console.error('OpenAI API Fehler:', error?.message, error?.response?.data);
    return NextResponse.json({ result: 'Fehler bei der Generierung der Empfehlung.' }, { status: 500 });
  }
}
