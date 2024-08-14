// import { PineconeClient } from '@pinecone-database/pinecone';
// // import { PineconeClient } from "@pinecone-database/pinecone";
// import { Pinecone } from '@pinecone-database/pinecone';
// import { env } from "./config";
// import { delay } from "./utils";

// let pineconeClientInstance: Pinecone | null = null;
// const pc = new Pinecone({ apiKey: '' });

// // Create pineconeIndex if it doesn't exist
// // async function createIndex(indexName: string) {
// //   try {
// //     await pc.createIndex({
// //       name: ,
// //       dimension: ,
// //       metric: '',
// //       spec: { 
// //         serverless: { 
// //           cloud: '', 
// //           region: '' 
// //         }
// //       } 
// //     });
// //     console.log(
// //       `Waiting for ${env.INDEX_INIT_TIMEOUT} seconds for index initialization to complete...`
// //     );
// //     await delay(env.INDEX_INIT_TIMEOUT);
// //     console.log("Index created !!");
// //   } catch (error) {
// //     console.error("error ", error);
// //     throw new Error("Index creation failed");
// //   }
// // }

// // Initialize index and ready to be accessed.
// async function initPineconeClient() {
//   try {
//     const pineconeClient = new Pinecone({
//       apiKey: env.PINECONE_API_KEY,
//     });
//     const indexName = env.PINECONE_INDEX_NAME;

//     // Assuming listIndexes returns an object with a property 'indexes' that is an array of strings
//     const indexListResponse = await pineconeClient.listIndexes();
//     const existingIndexes = indexListResponse.indexes; // Adjust 'indexes' based on the actual property name

//     // if (!existingIndexes.includes(indexName)) {
//     //   createIndex(indexName);
//     // } else {                                                                
//     //   console.log("Your index already exists. nice !!");
//     // }

//     return pineconeClient;
//   } catch (error) {
//     console.error("error", error);
//     throw new Error("Failed to initialize Pinecone Client");
//   }
// }

// export async function getPineconeClient() {
//   if (!pineconeClientInstance) {
//     pineconeClientInstance = await initPineconeClient();
//   }

//   return pineconeClientInstance;
// }


import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { Pinecone } from '@pinecone-database/pinecone';
// import { PineconeClient } from "@pinecone-database/pinecone";
import { env } from "./config";
import { delay } from "./utils";

let pineconeClientInstance: Pinecone | null = null;

// Create pineconeIndex if it doesn't exist
// async function createIndex(client: PineconeClient, indexName: string) {
//   try {
//     await client.createIndex({
//       createRequest: {
//         name: ,
//         dimension: ,
//         metric: "",
//       },
//     });
//     console.log(
//       `Waiting for ${env.INDEX_INIT_TIMEOUT} seconds for index initialization to complete...`
//     );
//     await delay(env.INDEX_INIT_TIMEOUT);
//     console.log("Index created !!");
//   } catch (error) {
//     console.error("error ", error);
//     throw new Error("Index creation failed");
//   }
// }

// Initialize index and ready to be accessed.
async function initPineconeClient() {
  try {
    const pineconeClient = new Pinecone({
      apiKey: env.PINECONE_API_KEY
    });
    
    const index = pineconeClient.Index(env.PINECONE_INDEX_NAME);

    // const existingIndexes = await pineconeClient.listIndexes();

    // if (!existingIndexes.includes(indexName)) {
    //   createIndex(pineconeClient, indexName);
    // } else {
    //   console.log("Your index already exists. nice !!");                                                                           
    // }                                                              

    return pineconeClient;
  } catch (error) {
    console.error("error", error);
    throw new Error("Failed to initialize Pinecone Client");
  }
}

export async function getPineconeClient() {
  if (!pineconeClientInstance) {
    pineconeClientInstance = await initPineconeClient();
  }

  return pineconeClientInstance;
}