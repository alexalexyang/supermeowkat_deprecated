import { AuthenticationClient, ManagementClient } from "auth0";
import { NextApiRequest, NextApiResponse } from "next";

import auth0 from "../../../utils/auth0";
import getConfig from "next/config";

const { serverRuntimeConfig } = getConfig();

export default async function me(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data = await auth0.getSession(req, res);
    const id = data?.user.sub;

    const authClient: any = new AuthenticationClient({
      domain: serverRuntimeConfig.AUTH0_DOMAIN,
      clientId: serverRuntimeConfig.AUTH0_CLIENT_ID,
      clientSecret: serverRuntimeConfig.AUTH0_CLIENT_SECRET,
    });

    const accessToken = await authClient.clientCredentialsGrant({
      audience: serverRuntimeConfig.AUTH0_AUDIENCE,
    });

    const management: any = new ManagementClient({
      token: accessToken.access_token,
      domain: serverRuntimeConfig.AUTH0_DOMAIN,
      clientId: serverRuntimeConfig.AUTH0_CLIENT_ID,
      clientSecret: serverRuntimeConfig.AUTH0_CLIENT_SECRET,
    });

    const changePasswordTicket = await management.createPasswordChangeTicket({
      user_id: id,
      client_id: serverRuntimeConfig.AUTH0_CLIENT_ID,
    });

    if (changePasswordTicket && changePasswordTicket.ticket) {
      return res.status(200).json({
        status: "success",
        changePasswordLink: changePasswordTicket.ticket,
      });
    }
    return res.status(500).json({ status: "false" });
  } catch (error) {
    res.status(error.status || 500).end(error.message);
  }
}
