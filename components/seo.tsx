import { NextPage } from "next";
import { NextSeo } from "next-seo";
import React from "react";
import ReactGA from "react-ga";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

interface Props {
  page?: string;
  description?: string;
  image?: {
    url: string;
    alt: string;
  };
  disallowRobot?: boolean;
}

const appDescription = publicRuntimeConfig.APP_DESCRIPTION;
const appName = publicRuntimeConfig.APP_NAME;
const appUrl = publicRuntimeConfig.APP_URL;
const googleAnalyticsId = publicRuntimeConfig.GOOGLE_ANALYTICS_ID;
const twitter = publicRuntimeConfig.TWITTER;

const ga = () => {
  ReactGA.initialize(googleAnalyticsId, {
    debug: true,
    titleCase: false,
  });

  if (typeof window !== "undefined") {
    ReactGA.pageview(window.location.pathname);
  }
};

const SEO: NextPage<Props> = ({
  page,
  description,
  image,
  disallowRobot,
}: Props) => {
  const pageTitle = page ? `${page} | ${appName}` : appName;
  const pageDescription = description ?? appDescription;

  let pageUrl;

  if (typeof window !== "undefined") {
    pageUrl = window.location.href ?? appUrl;
  }

  const pageImage = image ?? {
    url: `${appUrl}/logo.png`,
    width: 400,
    height: 400,
    alt: `${appName} logo`,
  };

  ga();

  return (
    <NextSeo
      title={pageTitle}
      description={pageDescription}
      canonical={pageUrl}
      openGraph={{
        url: pageUrl,
        title: page,
        description: pageDescription,
        images: [pageImage],
        site_name: appName,
      }}
      twitter={{
        handle: twitter,
        site: twitter,
        cardType: "summary_large_image",
      }}
      noindex={disallowRobot}
      nofollow={disallowRobot}
    />
  );
};

export default SEO;
