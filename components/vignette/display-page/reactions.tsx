import {
  OpenReactionsButton,
  ReactionBackground,
  ReactionButton,
  ReactionsWrapper,
} from "../../../styles/vignette/reactions-styles";
import { ReactionIcons, ReactionProps } from "../../../types/vignette-types";
import { getReactionIcon, useMutateReaction } from "./helpers";

import { NextPage } from "next";
import { UserProfileProps } from "../../../types/types";
import { useState } from "react";

interface Props {
  entryId: string;
  user: UserProfileProps;
  reactions: ReactionProps[];
}

const Reactions: NextPage<Props> = ({ entryId, user, reactions }: Props) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);
  const submitReaction = useMutateReaction();

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
          ReactionIcons.map((icon, idx) => (
            <ReactionButton
              key={idx}
              onClick={() => {
                setIsCollapsed(!isCollapsed);
                submitReaction.mutate({
                  newReactionType: icon,
                  userId: user.id,
                  entryId,
                });
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
