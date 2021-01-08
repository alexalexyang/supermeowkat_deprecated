import { connectToDatabase } from "./helper";

export const moviesCollection = async () => {
  const db: any = await connectToDatabase("movies");

  return db.collection("likes");
};
