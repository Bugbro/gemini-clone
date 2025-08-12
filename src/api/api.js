import { GoogleGenAI } from "@google/genai";


// The client gets the API key from the environment variable `GEMINI_API_KEY`.

const ai = new GoogleGenAI({apiKey :key_here});

async function main(props) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: props,
  });
  return response.text;
}

export default main;
