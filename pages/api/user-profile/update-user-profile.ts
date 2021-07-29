import { NextApiRequest, NextApiResponse } from "next";
import { getManagementClient, getUserAuth0Id } from "../../../utils/auth0";

import { ObjectId } from "mongodb";
import { connectToDatabase } from "../db-connections/helper";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id, userData } = JSON.parse(req.body);

    const userDataKeys = Object.keys(userData);

    if (userDataKeys.length === 0) {
      return res
        .status(200)
        .json({ status: "missing data", message: "No new values." });
    }

    if (userDataKeys.includes("email")) {
      // TODO: error handling
      await updateEmail(req, res, userData);
    }

    if (userDataKeys.includes("email") && userDataKeys.length === 1) {
      return res.status(200).json({ status: "success", userData });
    }

    const _id = new ObjectId(id);

    const conn = (await connectToDatabase("user")).collection("profiles");

    const { modifiedCount, upsertedCount } = await conn.updateOne(
      { _id },
      { $set: userData }
    );

    if (modifiedCount === 1 || upsertedCount === 1) {
      return res.status(200).json({ status: "success", userData });
    }

    return res.status(500).json({ status: "fail" });
  } catch (error) {
    res.status(error.status || 500).json({ success: false });
  }
};

const updateEmail = async (
  req: NextApiRequest,
  res: NextApiResponse,
  userData: any
) => {
  const management = await getManagementClient();

  return await management.updateUser(
    { id: await getUserAuth0Id(req, res) },
    {
      email: userData["email"],
    },
    (err: unknown) => {
      if (err) {
        throw err;
      }
    }
  );
};
