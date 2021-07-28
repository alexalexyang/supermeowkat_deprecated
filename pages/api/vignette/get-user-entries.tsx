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

    const data = results.map(
      (item: {
        user_id: string;
        _id: string;
        title: string;
        body: string;
      }) => ({
        userId: item.user_id,
        entryId: item._id,
        title: item.title,
        body: item.body,
      })
    );

    if (data.length > 0) {
      return res.status(200).json({ status: "success", data });
    }

    if (data.length === 0) {
      return res.status(404).json({ status: "success", data: [] });
    }

    return res.status(500).json({ status: "fail" });
  } catch (error) {
    res.status(error.status || 500).json({ success: false });
  }
};
