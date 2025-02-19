import { env } from "@api/env";
import { SYSTEM_PROMPT } from "@api/utils/ai/constant";
import { autoPrompt, initAIModel } from "@api/utils/ai/helpers";
import { tools } from "@api/utils/ai/tools";
import { createRouter } from "@api/utils/create-app";
import { logger } from "@api/utils/pino-logger";
import { upgradeWebSocket } from "@api/websocket";
import { Content, GoogleGenerativeAI } from "@google/generative-ai";
import { streamText } from "hono/streaming";

export const aiRoutes = createRouter().get(
  "/ai/chat",
  upgradeWebSocket(async (c) => {
    let chat: GoogleGenerativeAI.Chat;
    let history: Content[] = [
      {
        role: "model",
        parts: [
          {
            text: "Hi there! How can I help you with ShopZ today?",
          },
        ],
      },
    ];
    return {
      async onMessage(evt, ws) {
        logger.info("message", evt.data);

        let i = 0;
        let message = evt.data.toString();
        while (true) {
          const result = await chat.sendMessage(message);

          if (i === 0) {
            history.push({
              role: "user",
              parts: [
                {
                  text: message,
                },
              ],
            });
          }

          message = result.response.text();

          message = message.trim();

          history.push({
            role: "model",
            parts: [
              {
                text: message,
              },
            ],
          });

          // Remove triple backticks and extra spaces
          message = message.replace(/```json|```/g, "").trim();

          logger.info(message, "message");

          const call = JSON.parse(message);

          logger.info(call, "call");

          if (call.type === "output") {
            streamText(c, async (stream) => {
              for (const part of call?.output?.split(" ") ?? []) {
                ws.send(part + " ");
                await stream.sleep(100);
              }
              ws.send("'END'");
              await stream.close();
            });
            break;
          } else if (call.type === "action") {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const fn = tools?.[call?.action];
            if (!fn)
              // throw new Error(`Error : Action ${call?.action} not found`);
              return c.json(
                {
                  message: "Bad Response",
                  error: `Error : Action ${call?.action} not found`,
                },
                400,
              );
            const observation = await fn();
            const obs = {
              type: "observation",
              observation,
            };
            history.push({
              role: "model",
              parts: [
                {
                  text: JSON.stringify(obs),
                },
              ],
            });
          }

          i++;
        }
      },
      onOpen(evt, ws) {
        logger.info("open", evt);
        const apiKey = env.AI_API_KEY;
        const genAI = new GoogleGenerativeAI(apiKey);

        const model = genAI.getGenerativeModel({
          model: "gemini-2.0-flash",
          systemInstruction: SYSTEM_PROMPT,
        });
        history = [];
        chat = model.startChat({
          history: history,
        });
        ws.send("Hi there! How can I help you with ShopZ today?");
        ws.send("'END'");
      },
    };
  }),
);
