import { QueryClient, QueryClientProvider } from "react-query";

import { AppProps } from "next/app";
import Head from "next/head";
import InitialProps from "../components/InitialProps";
import Layout from "../components/Layout";
import { useEffect } from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: "always",
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: false,

      // 24 hours in milliseconds
      staleTime: 86400000,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Remove the server-side injected CSS.

    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles &&
        jssStyles.parentElement &&
        jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="icon" href="/Monster.svg" />
      </Head>

      <QueryClientProvider client={queryClient}>
        <InitialProps />

        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </>
  );
}
