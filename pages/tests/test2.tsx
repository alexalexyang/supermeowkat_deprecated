import Link from "next/link";
import { NextPage } from "next";
// import { useQueryClient } from "react-query";

const TestPage: NextPage = () => {
  // const queryClient = useQueryClient();

  // const testProfile = queryClient.getQueryData("user");

  // console.log("testProfile: ", testProfile);

  return (
    <>
      <h1>Test Page 2</h1>
      <Link href="/tests/test1">test page 1</Link>
    </>
  );
};

export default TestPage;
