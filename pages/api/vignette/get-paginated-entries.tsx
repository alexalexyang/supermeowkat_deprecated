import { NextApiRequest, NextApiResponse } from "next";

import { ObjectId } from "mongodb";
import { connectToDatabase } from "../db-connections/helper";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { lastEntryId } = JSON.parse(req.body);
    const searchParams = lastEntryId
      ? { _id: { $lt: new ObjectId(lastEntryId) } }
      : {};

    const conn = (await connectToDatabase("vignette")).collection("entry");

    const entries = await (
      await conn.find(searchParams).sort({ $natural: -1 }).limit(3)
    ).toArray();

    if (entries.length > 0) {
      return res.status(200).json({ status: "success", entries });
    }

    if (entries.length === 0) {
      return res.status(404).json({ status: "success", entries: [] });
    }

    return res.status(500).json({ status: "fail" });
  } catch (error) {
    res.status(error.status || 500).json({ success: false });
  }
};
