import {
  OpenReactionsButton,
  ReactionBackground,
  ReactionButton,
  ReactionsWrapper,
} from "../../../styles/vignette/reactions";
import { ReactionProps, ReactionTypes } from "../../../types/vignette-types";

import Anger from "../../../styles/icons/anger-icon";
import CatUnicorn from "../../../styles/icons/cat-unicorn-icon";
import { NextPage } from "next";
import NoStopping from "../../../styles/icons/no-stopping-icon";
import SolidHeart from "../../../styles/icons/heart-solid-icon";
import TropicalFlower from "../../../styles/icons/tropical-flower-icon";
import { UserProfileProps } from "../../../types/types";
import YellowUmbrella from "../../../styles/icons/yellow-umbrella-icon";
import fetch from "isomorphic-unfetch";
import { getReactionButton } from "./helpers";
import { useState } from "react";

interface Props {
  entryId: string;
  user: UserProfileProps;
  reactions: ReactionProps[];
}

const Reactions: NextPage<Props> = ({ entryId, user, reactions }: Props) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

  // TODO: Optimistically mutate

  const submitReaction = async (reaction: ReactionTypes) => {
    const { status } = await fetch("/api/vignette/post-reaction", {
      method: "POST",
      body: JSON.stringify({
        id: user.id,
        entryId,
        reaction,
      }),
    });
    console.log(status);
  };

  return (
    <>
      {!!reactions.length && (
        <ReactionsWrapper>
          {reactions.map((reaction) => (
            <ReactionBackground key={reaction._id}>
              {getReactionButton(reaction.reaction)}
            </ReactionBackground>
          ))}
        </ReactionsWrapper>
      )}
      <ReactionsWrapper>
        <OpenReactionsButton
          onClick={() => setIsCollapsed(!isCollapsed)}
          aria-label="Add reaction"
        >
          {isCollapsed ? "+" : "-"}
        </OpenReactionsButton>
        {!isCollapsed && (
          <>
            <ReactionButton
              onClick={() => {
                setIsCollapsed(!isCollapsed);
                submitReaction("cat-unicorn");
              }}
            >
              <CatUnicorn />
            </ReactionButton>
            <ReactionButton
              onClick={() => {
                setIsCollapsed(!isCollapsed);
                submitReaction("heart");
              }}
            >
              <SolidHeart />
            </ReactionButton>
            <ReactionButton
              onClick={() => {
                setIsCollapsed(!isCollapsed);
                submitReaction("flower");
              }}
            >
              <TropicalFlower />
            </ReactionButton>
            <ReactionButton
              onClick={() => {
                setIsCollapsed(!isCollapsed);
                submitReaction("umbrella");
              }}
            >
              <YellowUmbrella />
            </ReactionButton>
            <ReactionButton
              onClick={() => {
                setIsCollapsed(!isCollapsed);
                submitReaction("stop-sign");
              }}
            >
              <NoStopping />
            </ReactionButton>
            <ReactionButton
              onClick={() => {
                setIsCollapsed(!isCollapsed);
                submitReaction("angry-face");
              }}
            >
              <Anger />
            </ReactionButton>
          </>
        )}
      </ReactionsWrapper>
    </>
  );
};

export default Reactions;
