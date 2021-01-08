import { NextApiRequest, NextApiResponse } from "next";

import { ObjectId } from "mongodb";
import { connectToDatabase } from "../db-connections/helper";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id } = req.query;
    const user_id = new ObjectId(id as string);

    const conn = (await connectToDatabase("vignette")).collection("entry");

    const results = await (
      await conn.find({
        user_id,
      })
    ).toArray();

    // console.log(results);

    if (results.length > 0) {
      return res.status(200).json({ status: "success", results });
    }

    if (results.length === 0) {
      return res.status(404).json({ status: "success", results: [] });
    }

    return res.status(500).json({ status: "fail" });
  } catch (error) {
    res.status(error.status || 500).json({ success: false });
  }
};
