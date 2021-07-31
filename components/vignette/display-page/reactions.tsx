import {
  OpenReactionsButton,
  ReactionBackground,
  ReactionButton,
  ReactionsWrapper,
} from "../../../styles/vignette/reactions-styles";
import {
  ReactionProps,
  ReactionTypes,
  reactionIcons,
} from "../../../types/vignette-types";

import { NextPage } from "next";
import { UserProfileProps } from "../../../types/types";
import fetch from "isomorphic-unfetch";
import { getReactionIcon } from "./helpers";
import { useState } from "react";

interface Props {
  entryId: string;
  user: UserProfileProps;
  reactions: ReactionProps[];
}

const Reactions: NextPage<Props> = ({ entryId, user, reactions }: Props) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

  // TODO: Optimistically mutate

  const postReaction = async (reaction: ReactionTypes) => {
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
              {getReactionIcon(reaction.reaction)}
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
        {!isCollapsed &&
          reactionIcons.map((icon, idx) => (
            <ReactionButton
              key={idx}
              onClick={() => {
                setIsCollapsed(!isCollapsed);
                postReaction(icon);
              }}
            >
              {getReactionIcon(icon)}
            </ReactionButton>
          ))}
      </ReactionsWrapper>
    </>
  );
};

export default Reactions;
