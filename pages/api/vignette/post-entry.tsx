import { NextApiRequest, NextApiResponse } from "next";

import { ObjectId } from "mongodb";
import { connectToDatabase } from "../db-connections/helper";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { userId, title, body } = JSON.parse(req.body);

    if (title.length === 0 || body.length === 0) {
      return res
        .status(422)
        .json({ success: false, message: "Missing fields." });
    }

    const user_id = new ObjectId(userId);

    const conn = (await connectToDatabase("vignette")).collection("entry");

    const existing = await (await conn.find({ user_id })).toArray();

    if (existing.length === 5) {
      return res.status(422).json({ success: false, message: "Already full." });
    }

    const { insertedCount } = await conn.insertOne({
      user_id,
      title,
      body,
    });

    if (insertedCount === 1) {
      return res
        .status(200)
        .json({ status: "success", entry: { title, body } });
    }

    return res.status(500).json({ status: "fail" });
  } catch (error) {
    res.status(error.status || 500).json({ success: false });
  }
};
