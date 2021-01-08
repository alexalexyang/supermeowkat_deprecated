import { NextApiRequest, NextApiResponse } from "next";
import { getManagementClient, getUserAuth0Id } from "../../../utils/auth0";

import { deleteUserFromDB } from "./delete-user-from-db";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const id = await getUserAuth0Id(req, res);
    const management: any = await getManagementClient();

    return management.users.delete({ id }, async (err: unknown) => {
      if (err) {
        throw err;
      }

      const deleteFromDbResult = await deleteUserFromDB(id.split("|")[1]);

      if (deleteFromDbResult === "success") {
        return res.status(200).json({ success: true });
      }
      return res.status(500).json({ success: false });
    });
  } catch (error) {
    res.status(error.status || 500).json({ success: false });
  }
};
