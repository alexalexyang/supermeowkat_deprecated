import {
  BannerWrapper,
  Body,
  MainWrapper,
} from "../../styles/main-page-styles";
import { noFunc, yesFunc } from "./helpers";

import Content from "./content";
import MessagesBanner from "../../components/messages-banner";
import { NextPage } from "next";
import SwipeGroup from "./SwipeGroup";
import { causes } from "../../components/messages-banner/messages";

const Main: NextPage = () => {
  return (
    <MainWrapper>
      <Body>
        <SwipeGroup
          Render={Content as any}
          noFunc={noFunc}
          yesFunc={yesFunc}
          fetchUrl={`/api/content/get-content`}
        />
      </Body>
      <BannerWrapper>
        <MessagesBanner messages={causes} />
      </BannerWrapper>
    </MainWrapper>
  );
};

export default Main;
