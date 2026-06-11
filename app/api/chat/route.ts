import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });

    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: "Invalid messages format" }, { status: 400 });
    }

    const chat = ai.chats.create({
      model: "gemini-3.5-flash",
      config: {
        systemInstruction: "You are Ali, the friendly support and navigation assistant for the NutriAli website. Your primary job is to help users navigate the site (Home, About Us, Services, Contact), collect their feedback, and guide them to the right place based on their needs. Do NOT provide clinical or medical nutrition advice. Keep your responses short, helpful, and focused on site navigation and customer support. Please respond in the same language the user speaks.",
      }
    });
    
    // Reproduce history (simplistic approach for stateless /api route)
    // The Gemini SDK requires `history` to be set on create if we want to continue, 
    // but the easiest way here is to just send all previous turns as history during init.
    // However, ai.chats.create doesn't take history in constructor the same way as older SDK,
    // wait, I need to check the @google/genai docs for how to specify history.
    // Actually, `config.history` might be valid, or we can just send the chat context as a string.
    // Wait, the SDK SKILL.md just says:
    // `const chat = ai.chats.create({ model: "gemini-3.5-flash", config: { ... } });`
    // Wait, let's just use `ai.models.generateContent` with the assembled conversation if chat history is tricky, OR check `ai.chats.create` config for history. Let's look up how to pass history. Since I don't see history explicitly mentioned in the SKILL.md for `ai.chats.create`, let me construct it manually using `generateContent` with `contents: []`.
    // Wait, let's just pass `contents` array to `generateContent`.
    
    // Format for generateContent contents: [{ role: 'user', parts: [{ text: '...' }] }]
    const contents = messages.map((msg: any) => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.content }]
    }));

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents,
      config: {
        systemInstruction: "You are Ali, the friendly support and navigation assistant for the NutriAli website. Your primary job is to help users navigate the site (Home, About Us, Services, Contact), collect their feedback, and guide them to the right place based on their needs. Do NOT provide clinical or medical nutrition advice. Keep your responses short, helpful, and focused on site navigation and customer support. Please respond in the same language the user speaks.",
      }
    });

    return NextResponse.json({ text: response.text });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    // Ignore internal errors on the client, return a friendly generic message
    return NextResponse.json({ text: "Desculpe, o assistente Ali está enfrentando alta demanda no momento. Por favor, tente novamente em alguns instantes." }, { status: 200 });
  }
}
