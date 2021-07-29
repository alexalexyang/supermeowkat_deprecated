import { NextApiRequest, NextApiResponse } from "next";

import { connectToDatabase } from "../db-connections/helper";

/**
 * @deprecated To be replaced with /get-paginated-entries
 */
export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const conn = (await connectToDatabase("vignette")).collection("entry");

    const results = await (await conn.find()).toArray();

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
