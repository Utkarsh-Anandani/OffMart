import { env } from "./config";
// import { OpenAIEmbeddings } from 'langchain/embeddings/openai';
import { OpenAIEmbeddings } from "@langchain/openai";
// import { PineconeStore } from 'langchain/vectorstores/pinecone';
import { PineconeStore } from "@langchain/pinecone";
import  {Pinecone}  from '@pinecone-database/pinecone';
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";

export async function embedAndStoreDocs(
  client: Pinecone,
  // @ts-ignore docs type error
  docs: Document<Record<string, any>>[]
) {
  /*create and store the embeddings in the vectorStore*/
  try {
    const embeddings = new GoogleGenerativeAIEmbeddings();
    const index = client.Index(env.PINECONE_INDEX_NAME);

    //embed the PDF documents
    await PineconeStore.fromDocuments(docs, embeddings, {
      pineconeIndex: index,
      textKey: 'text',
      
    });
    console.log("Successfull");
  } catch (error) {
    console.log('error ', error);
    throw new Error('Failed to load your docs !');
  }
}

// Returns vector-store handle to be used a retrievers on langchains
export async function getVectorStore(client: Pinecone) {
  try {
    const embeddings = new GoogleGenerativeAIEmbeddings();
    const index = client.Index(env.PINECONE_INDEX_NAME);

    const vectorStore = await PineconeStore.fromExistingIndex(embeddings, {
      pineconeIndex: index,
      textKey: 'text',
    });

    return vectorStore;
  } catch (error) {
    console.log('error ', error);
    throw new Error('Something went wrong while getting vector store !');
  }
}