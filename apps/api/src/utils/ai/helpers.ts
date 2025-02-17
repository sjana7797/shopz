import { SYSTEM_PROMPT } from "./constant";
import { tools } from "./tools";
import { env } from "@api/env";
import {
  ChatSession,
  Content,
  GoogleGenerativeAI,
} from "@google/generative-ai";

const apiKey = env.AI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

export function initAIModel(history: Content[]) {
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
    systemInstruction: SYSTEM_PROMPT,
  });

  const chat = model.startChat({
    history: history,
    generationConfig: {
      maxOutputTokens: 500,
    },
  });

  return { model, chat };
}

export async function autoPrompt(
  chat: ChatSession,
  history: Content[],
  initialMessage: string,
) {}
