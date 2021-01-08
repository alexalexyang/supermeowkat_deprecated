import { initAuth0 } from "@auth0/nextjs-auth0";
import getConfig from "next/config";
import { AuthenticationClient, ManagementClient } from "auth0";
import { NextApiRequest, NextApiResponse } from "next";

const { serverRuntimeConfig } = getConfig();

const auth0Client = initAuth0({
  baseURL: <string>serverRuntimeConfig.AUTH0_BASE_URL,
  issuerBaseURL: <string>serverRuntimeConfig.AUTH0_ISSUER_BASE_URL,
  secret: <string>serverRuntimeConfig.AUTH0_SESSION_COOKIE_SECRET,
  clientID: <string>serverRuntimeConfig.AUTH0_CLIENT_ID,
  clientSecret: <string>serverRuntimeConfig.AUTH0_CLIENT_SECRET,
  // audience: <string>serverRuntimeConfig.AUTH0_AUDIENCE,
  // scope: "openid profile",
  routes: {
    postLogoutRedirect: <string>serverRuntimeConfig.AUTH0_LOGOUT_REDIRECT_URI,
  },
  session: {
    // The secret used to encrypt the cookie.
    // cookieSecret: <string>serverRuntimeConfig.AUTH0_SESSION_COOKIE_SECRET,

    // The cookie lifetime (expiration) in seconds. Set to 8 hours by default.
    rollingDuration: 60 * 60 * 8,
    // (Optional) The cookie domain this should run on. Leave it blank to restrict it to your domain.
    // cookieDomain: serverRuntimeConfig.DOMAIN,

    cookie: {
      // (Optional) SameSite configuration for the session cookie. Defaults to 'lax', but can be changed to 'strict' or 'none'. Set it to false if you want to disable the SameSite setting.
      sameSite: "lax",
    },
  },
  // httpTimeout: 2500,
  // clockTolerance: 10000,
});

export default auth0Client;

export const getUserAuth0Id = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  return (await auth0Client.getSession(req, res))?.user.sub;
};

const authClient: any = new AuthenticationClient({
  domain: serverRuntimeConfig.AUTH0_ISSUER_BASE_URL,
  clientId: serverRuntimeConfig.AUTH0_CLIENT_ID,
  clientSecret: serverRuntimeConfig.AUTH0_CLIENT_SECRET,
});

const getAuth0Token = () =>
  authClient.clientCredentialsGrant({
    audience: serverRuntimeConfig.AUTH0_AUDIENCE,
  });

export const getManagementClient: any = async () =>
  new ManagementClient({
    token: (await getAuth0Token()).access_token,
    domain: serverRuntimeConfig.AUTH0_ISSUER_BASE_URL,
    clientId: serverRuntimeConfig.AUTH0_CLIENT_ID,
    clientSecret: serverRuntimeConfig.AUTH0_CLIENT_SECRET,
  });
