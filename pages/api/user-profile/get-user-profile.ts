import { NextApiRequest, NextApiResponse } from "next";

import { connectToDatabase } from "../db-connections/helper";

export default async function me(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { auth0_id } = JSON.parse(req.body);

    const conn = (await connectToDatabase("user")).collection("profiles");

    const userProfile = await conn.findOne({ auth0_id });

    if (userProfile) {
      return res.status(200).json({ success: "success", userProfile });
    }
    return res.status(404).json({ success: "fail" });
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).end(error.message);
  }
}
