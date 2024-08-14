// import { ChatOpenAI } from "langchain/chat_models/openai";
import { ChatOpenAI } from "@langchain/openai";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

export const streamingModel = new ChatGoogleGenerativeAI({
  modelName: "gemini-1.5-pro",
  streaming: true,
  verbose: true,
  temperature: 0.8,
});

export const nonStreamingModel = new ChatGoogleGenerativeAI({
  modelName: "gemini-1.5-pro",
  verbose: true,
  temperature: 0.8,
});