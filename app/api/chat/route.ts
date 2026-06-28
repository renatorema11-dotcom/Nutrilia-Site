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

    const contents = messages.map((msg: any) => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.content }]
    }));

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents,
      config: {
        systemInstruction: "Você é a Ali, a IA assistente de suporte e navegação do aplicativo e site NutriAli. Sua única e principal função é ajudar os usuários a navegar na plataforma e responder a perguntas sobre a interface, localização de botões, menus, e funcionamento do site.\n\nCONHECIMENTO DO SITE:\n- O menu principal fica na parte superior com links para Home, About Us, Services, Blog e Contact.\n- Se o usuário perguntar 'Aonde é para mim começar a usar o aplicativo?', você responde: 'Aperte o botão de início (Get Started) na parte superior à direita do menu.'\n- Se perguntarem 'Aonde que é o blog?' ou qualquer outra página do rodapé, responda: 'Você arrasta para baixo todo (rola a página até o fim), você vai ver que tem lá no canto inferior direito, a tecla escrito blog, você clica e você chegará lá.' (Ou adapte para a página correta).\n- Os botões das redes sociais e links ficam em pequenos ícones circulares no rodapé e na página de contatos.\n\nREGRAS CRÍTICAS:\n- NÃO DÊ CONSELHOS NUTRICIONAIS, de dieta ou médicos em NENHUMA hipótese. Se perguntarem algo de nutrição ou pedirem conselhos, diga que você é a IA de suporte da plataforma e não fornece diagnóstico ou conselho clínico, mas pode guiá-los até a página de Contato para falarem com a equipe de especialistas.\n- Responda apenas em português do Brasil.\n- Seja educada, direta e rápida nas informações.",
      }
    });

    return NextResponse.json({ text: response.text });
  } catch (error: any) {
    console.error("Erro na API do Gemini:", error);
    
    if (!process.env.GEMINI_API_KEY) {
       return NextResponse.json({ text: "A API Key do Gemini não está configurada. Por favor, adicione-a no menu Secrets (Settings) do AI Studio." }, { status: 200 });
    }
    
    // Ignore internal errors on the client, return a friendly generic message
    return NextResponse.json({ text: "Desculpe, o assistente Ali está enfrentando alta demanda no momento. Por favor, tente novamente em alguns instantes." }, { status: 200 });
  }
}
