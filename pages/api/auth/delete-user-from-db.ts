import { connectToDatabase } from "../db-connections/helper";

export const deleteUserFromDB = async (userId: string) => {
  const db = await connectToDatabase("user");

  const result = await db
    .collection("profiles")
    .deleteOne({ auth0_id: userId });

  if (result.deletedCount === 1) {
    return "success";
  }

  return "fail";
};
