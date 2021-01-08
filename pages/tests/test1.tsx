import Link from "next/link";
import { NextPage } from "next";
// import { QueryCache, useQueryClient } from "react-query";

const TestPage: NextPage = () => {
  // const queryClient = useQueryClient();

  // const testProfile = queryClient.getQueryData("user");

  // console.log(testProfile);

  return (
    <>
      <h1>Test Page 1</h1>

      <Link href="/tests/test2">test page 2</Link>
    </>
  );
};

export default TestPage;
