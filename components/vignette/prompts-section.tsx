import {
  PromptSection,
  StyledSpan,
} from "../../styles/page-styles/vignette-edit-page-styles";

import CloseButton from "../close-button";
import { GenericButton } from "../../styles/buttons";
import { NextPage } from "next";
import { useState } from "react";

interface Props {}

const getRandomString = (strings: string[]) =>
  strings[Math.floor(Math.random() * strings.length)];

const Prompt: NextPage<Props> = () => {
  const [prompt, setPrompt] = useState<string | null>(getRandomString(prompts));
  const [togglePrompt, setTogglePrompt] = useState<boolean>(false);

  return (
    <>
      {togglePrompt === false && (
        <GenericButton onClick={() => setTogglePrompt(!togglePrompt)}>
          Open prompts
        </GenericButton>
      )}
      {togglePrompt && (
        <PromptSection>
          <CloseButton
            ariaLabel="Close prompts"
            onClick={() => setTogglePrompt(!togglePrompt)}
          />

          <StyledSpan>{prompt}</StyledSpan>

          <GenericButton onClick={() => setPrompt(getRandomString(prompts))}>
            Get random prompt
          </GenericButton>
        </PromptSection>
      )}
    </>
  );
};

export default Prompt;

const prompts = [
  "The start of your next novel.",
  "It was a dark and stormy night...",
  "Avast!",
  "A song about mosses.",
  "What is cuddlepunk?",
  "A baroque poem about bananas",
  "Lavash and kaki in the courtyard",
  "Late stage capitalism?",
  "Climate emergences.",
  "Why is your favourite show so ignorant of privilege?",
  "Khinkhali and pierogi and bao.",
  "How to make pistachio coffee.",
];
