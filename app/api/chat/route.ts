import OpenAI from "openai";
import { DataAPIClient } from "@datastax/astra-db-ts";
import { streamText } from "ai";
import { openai } from "@ai-sdk/openai";

const open_ai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const client = new DataAPIClient(process.env.ASTRA_DB_APPLICATION_TOKEN);
const db = client.db(process.env.ASTRA_DB_ENDPOINT, {
  namespace: process.env.ASTRA_DB_NAMESPACE,
});

export async function POST(req: Request) {
  const { messages } = await req.json();
  const latestMessage = messages[messages.length - 1]?.content;

  let docContext = "";

  const embedding = await open_ai.embeddings.create({
    model: "text-embedding-3-small",
    input: latestMessage,
    encoding_format: "float",
  });

  try {
    const collection = db.collection(process.env.ASTRA_DB_COLLECTION);
    const cursor = collection.find(null, {
      sort: {
        $vector: embedding.data[0].embedding,
      },
      limit: 10,
    });

    const documents = await cursor.toArray();

    const docsMap = documents?.map((doc) => doc.text);

    docContext = JSON.stringify(docsMap);
  } catch (error) {
    console.error(error);
    docContext = "";
  }

  const template = {
    role: "system",
    content: `You are an AI assistant who knows everything about Formula One. Use the below context to augment what you know about Formula One racing. The context will provide you with the most recent page data from wikipedia, the official F1 website and others. If the context doesn't include the information you need, answer based on your existing knowledge and don't mention the source of your information or what the context does or doesn't include. Format responses using markdown where applicable and don't return images.
    ------------------
    START CONTEXT
    ${docContext}
    END CONTEXT
    ------------------
    QUESTION: ${latestMessage}
    ------------------
    `,
  };

  const result = streamText({
    model: openai("gpt-4"),
    messages: [template, ...messages],
  });

  return result.toDataStreamResponse();
}
