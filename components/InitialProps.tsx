import { NextPage } from "next";
import React from "react";
import { useGetUserProfile } from "../utils/user-profile";

const InitialProps: NextPage = () => {
  useGetUserProfile();

  return <></>;
};

export default InitialProps;
