import { NextApiRequest, NextApiResponse } from "next";

import { ObjectId } from "mongodb";
import { connectToDatabase } from "../db-connections/helper";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id, entryId, reaction } = JSON.parse(req.body);

    const conn = (await connectToDatabase("vignette")).collection("reaction");

    const { modifiedCount, upsertedCount } = await conn.updateOne(
      { user_id: new ObjectId(id), entryId: new ObjectId(entryId) },
      {
        $set: {
          user_id: new ObjectId(id),
          entryId: new ObjectId(entryId),
          reaction,
        },
      },
      { upsert: true }
    );

    if (modifiedCount === 1 || upsertedCount === 1) {
      return res.status(200).json({
        status: "success",
      });
    }

    return res.status(200).json({ status: "fail" });
  } catch (error) {
    res.status(error.status || 500).json({ success: "fail", error });
  }
};
