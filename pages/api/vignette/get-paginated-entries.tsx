import { NextApiRequest, NextApiResponse } from "next";

import { ObjectId } from "mongodb";
import { VignetteEntryProps } from "../../../types/vignette-types";
import { connectToDatabase } from "../db-connections/helper";

const ITEMS_PER_PAGE = 2;

const getVignetteEntries = async (lastEntryId: string) => {
  const connEntry = (await connectToDatabase("vignette")).collection("entry");

  const searchParams = lastEntryId
    ? { _id: { $lt: new ObjectId(lastEntryId) } }
    : {};

  return await (
    await connEntry.aggregate([
      { $match: searchParams },
      { $sort: { _id: -1 } },
      { $limit: ITEMS_PER_PAGE },
      {
        $lookup: {
          from: "reaction",
          localField: "_id",
          foreignField: "entryId",
          as: "reactions",
        },
      },
    ])
  ).toArray();
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { lastEntryId } = JSON.parse(req.body);

    const entries: VignetteEntryProps[] = await getVignetteEntries(lastEntryId);

    return res.status(200).json({ status: "success", entries: entries ?? [] });
  } catch (error) {
    res.status(error.status || 500).json({ success: "fail" });
  }
};
