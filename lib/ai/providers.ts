import { createOpenAI } from "@ai-sdk/openai";
import {
  customProvider,
  extractReasoningMiddleware,
  wrapLanguageModel,
} from "ai";
import { isTestEnvironment } from "../constants";

const openai = createOpenAI({
  baseURL: 'https://api.deepseek.com',
  apiKey: process.env.DEEPSEEK_API_KEY,
});
console.log('openai',openai.languageModel("deepseek-chat"))

// if (!isTestEnvironment && !process.env.DEEPSEEK_API_KEY) {
//   throw new Error("Missing OPENAI_API_KEY environment variable for OpenAI.");
// }

// export const myProvider = isTestEnvironment
//   ? (() => {
//       const {
//         artifactModel,
//         chatModel,
//         reasoningModel,
//         titleModel,
//       } = require("./models.mock");
//       return customProvider({
//         languageModels: {
//           "chat-model": chatModel,
//           "chat-model-reasoning": reasoningModel,
//           "title-model": titleModel,
//           "artifact-model": artifactModel,
//         },
//       });
//     })()
//   : customProvider({
//       languageModels: {
//         "chat-model": openai.languageModel("gpt-4o-mini"),
//         "chat-model-reasoning": wrapLanguageModel({
//           model: openai.languageModel("o4-mini"),
//           middleware: extractReasoningMiddleware({ tagName: "think" }),
//         }),
//         "title-model": openai.languageModel("gpt-4o-mini"),
//         "artifact-model": openai.languageModel("gpt-4o-mini"),
//       },
//     });

    export const myProvider =  customProvider({
      languageModels: {
        "chat-model": openai.languageModel("deepseek-chat"),
        "chat-model-reasoning": wrapLanguageModel({
          model: openai.languageModel("deepseek-chat"),
          middleware: extractReasoningMiddleware({ tagName: "think" }),
        }),
        "title-model": openai.languageModel("deepseek-chat"),
        "artifact-model": openai.languageModel("deepseek-chat"),
      },
    });
