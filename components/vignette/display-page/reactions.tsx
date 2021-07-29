import Anger from "../../../styles/icons/anger-icon";
import CatUnicorn from "../../../styles/icons/cat-unicorn-icon";
import { NextPage } from "next";
import NoStopping from "../../../styles/icons/no-stopping-icon";
import { RoundButton } from "../../../styles/buttons";
import SolidHeart from "../../../styles/icons/heart-solid-icon";
import TropicalFlower from "../../../styles/icons/tropical-flower-icon";
import { UserProfileProps } from "../../../types/types";
import YellowUmbrella from "../../../styles/icons/yellow-umbrella-icon";
import fetch from "isomorphic-unfetch";
import styled from "styled-components";
import { useState } from "react";

const StyledRoundButton = styled(RoundButton)`
  border: none;
  font-size: 2rem;
  height: 2rem;
  width: 2rem;
  padding: 2px;

  :hover {
    transform: scale(1.5) translateY(-30%);
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
  width: fit-content;
`;

interface Props {
  entryId: string;
  user: UserProfileProps;
}

const Reactions: NextPage<Props> = ({ entryId, user }: Props) => {
  const [showReactions, setShowReactions] = useState<boolean>(false);

  const submitReaction = async (reaction: string) => {
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
      <Wrapper>
        <StyledRoundButton>
          <CatUnicorn />
        </StyledRoundButton>
      </Wrapper>
      <Wrapper>
        <StyledRoundButton
          onClick={() => setShowReactions(!showReactions)}
          aria-label="Add reaction"
        >
          +
        </StyledRoundButton>
        {showReactions && (
          <>
            <StyledRoundButton
              onClick={() => {
                setShowReactions(!showReactions);
                submitReaction("cat-unicorn");
              }}
            >
              <CatUnicorn />
            </StyledRoundButton>
            <StyledRoundButton>
              <SolidHeart />
            </StyledRoundButton>
            <StyledRoundButton>
              <TropicalFlower />
            </StyledRoundButton>
            <StyledRoundButton>
              <YellowUmbrella />
            </StyledRoundButton>
            <StyledRoundButton>
              <NoStopping />
            </StyledRoundButton>
            <StyledRoundButton>
              <Anger />
            </StyledRoundButton>
          </>
        )}
      </Wrapper>
    </>
  );
};

export default Reactions;
