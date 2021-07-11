module.exports = {
  serverRuntimeConfig: {
    AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
    AUTH0_ISSUER_BASE_URL: process.env.AUTH0_ISSUER_BASE_URL,
    AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
    AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET,
    AUTH0_AUDIENCE: process.env.AUTH0_AUDIENCE,
    AUTH0_REDIRECT_URI: process.env.AUTH0_REDIRECT_URI,
    AUTH0_LOGOUT_REDIRECT_URI: process.env.AUTH0_LOGOUT_REDIRECT_URI,
    AUTH0_SESSION_COOKIE_SECRET: process.env.AUTH0_SESSION_COOKIE_SECRET,
    AUTH0_BASE_URL:
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "https://supermeowkat.com",
    // AUTH0_MANAGEMENT_API_TEST_CLIENT_ID:
    //   process.env.AUTH0_MANAGEMENT_API_TEST_CLIENT_ID,
    // AUTH0_MANAGEMENT_API_TEST_SECRET:
    //   process.env.AUTH0_MANAGEMENT_API_TEST_SECRET,
    TMDB_V3: process.env.TMDB_V3,
    MONGODB_PW: process.env.MONGODB_PW,
    DEVELOPMENT: "http://localhost:3000",
    PRODUCTION: "https://supermeowkat.com",
    ENVIRONMENT: process.env.NODE_ENV,
  },
  publicRuntimeConfig: {
    APP_NAME: "supermeowkat",
    APP_DESCRIPTION:
      "Discover movies from around the world. For now anyway. This app will become a social network at some point.", // Max 155 characters.
    APP_URL: "https://supermeowkat.com",
    TWITTER: "@supermeowkat",
    GOOGLE_ANALYTICS_ID: "UA-155349023-1",
  },
  webpack(config) {
    config.module.rules.push(
      // {
      //   test: /\.svg$/,
      //   use: ["@svgr/webpack"],
      // },
      {
        test: /\.md$/,
        use: "raw-loader",
      }
    );

    return config;
  },
};
