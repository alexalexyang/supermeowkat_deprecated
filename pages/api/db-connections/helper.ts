import getConfig from "next/config";
import mongoClient from "mongodb";

const { serverRuntimeConfig } = getConfig();

const pw = serverRuntimeConfig.MONGODB_PW;

let cachedDb: any = null;

export const connectToDatabase = async (dbName: string) => {
  if (cachedDb) {
    return cachedDb;
  }

  const client = await mongoClient.MongoClient.connect(
    `mongodb+srv://nate:${pw}@cluster0.es9vt.mongodb.net/${dbName}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

  const db = await client.db(dbName);

  cachedDb = db;
  return db;
};
