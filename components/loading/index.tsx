import Image from "next/image";
import { LoadingImageWrapper } from "../../styles/misc-styles";
import { NextPage } from "next";

const Loading: NextPage = () => {
  return (
    <LoadingImageWrapper>
      <Image src={require("../../public/loading.gif")} alt="Loading..." />
      <h2>{`This is you. This is how you wait.`}</h2>
    </LoadingImageWrapper>
  );
};

export default Loading;
