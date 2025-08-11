import { GoogleGenAI } from "@google/genai";


// The client gets the API key from the environment variable `GEMINI_API_KEY`.

const ai = new GoogleGenAI({apiKey : "AIzaSyA0618-um1sC6up3oKrdKnhOEXB3xVh9WY"});

async function main(props) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: props,
  });
  console.log(response.text);
}

export default main;