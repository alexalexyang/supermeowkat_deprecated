import { NextApiRequest, NextApiResponse } from "next";

import { ObjectId } from "mongodb";
import { connectToDatabase } from "../db-connections/helper";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id, entryId, reaction } = JSON.parse(req.body);

    const user_id = new ObjectId(id);

    const conn = (await connectToDatabase("vignette")).collection("reaction");

    const { insertedCount } = await conn.insertOne({
      user_id,
      entryId,
      reaction,
    });

    if (insertedCount === 1) {
      return res.status(200).json({ status: "success" });
    }

    return res.status(500).json({ status: "fail" });
  } catch (error) {
    res.status(error.status || 500).json({ success: false });
  }
};
