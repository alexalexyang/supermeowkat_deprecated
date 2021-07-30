import { NextApiRequest, NextApiResponse } from "next";

import { ObjectId } from "mongodb";
import { connectToDatabase } from "../db-connections/helper";

const ITEMS_PER_PAGE = 2;

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { lastEntryId } = JSON.parse(req.body);
    const searchParams = lastEntryId
      ? { _id: { $lt: new ObjectId(lastEntryId) } }
      : {};

    const conn = (await connectToDatabase("vignette")).collection("entry");

    const entries = await (
      await conn.find(searchParams).sort({ $natural: -1 }).limit(ITEMS_PER_PAGE)
    ).toArray();

    return res.status(200).json({ status: "success", entries: entries ?? [] });
  } catch (error) {
    res.status(error.status || 500).json({ success: "fail" });
  }
};
