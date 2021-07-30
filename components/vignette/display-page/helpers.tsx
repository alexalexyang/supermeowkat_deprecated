import Anger from "../../../styles/icons/anger-icon";
import CatUnicorn from "../../../styles/icons/cat-unicorn-icon";
import NoStopping from "../../../styles/icons/no-stopping-icon";
import { ReactionTypes } from "../../../types/vignette-types";
import SolidHeart from "../../../styles/icons/heart-solid-icon";
import TropicalFlower from "../../../styles/icons/tropical-flower-icon";
import YellowUmbrella from "../../../styles/icons/yellow-umbrella-icon";

export const getReactionButton = (reactionType: ReactionTypes) => {
  switch (reactionType) {
    case "cat-unicorn":
      return <CatUnicorn />;
    case "heart":
      return <SolidHeart />;
    case "flower":
      return <TropicalFlower />;
    case "umbrella":
      return <YellowUmbrella />;
    case "stop-sign":
      return <NoStopping />;
    case "angry-face":
      return <Anger />;
    default:
      return;
  }
};
