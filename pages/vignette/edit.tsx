import {
  CharacterCountSection,
  CounterSpan,
  PageWrapper,
  PastVignettesSection,
  StyledDetails,
  StyledInput,
  StyledTextArea,
  WritingSection,
  WritingSectionFooter,
} from "../../styles/page-styles/vignette-page-styles";
import { useEffect, useState } from "react";

import { GenericButton } from "../../styles/buttons";
import { NextPage } from "next";
import Prompt from "../../components/vignette/prompt";
import SEO from "../../components/seo";
import { StyledForm } from "../../styles/forms";
import { StyledWarning } from "../../styles/misc-styles";
import fetch from "isomorphic-unfetch";
import { useForm } from "react-hook-form";
import { useGetUserProfile } from "../../utils/user-profile";

interface Props {}

const EditVignette: NextPage<Props> = () => {
  const { data: profile, isLoading } = useGetUserProfile();
  const [characterCount, setCharacterCount] = useState<number>(0);
  const [entries, setEntries] = useState<object[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // TODO: use react-query
  useEffect(() => {
    const results = async () => {
      if (!profile || !profile.id) {
        return;
      }

      const res = await (
        await fetch(`/api/vignette/get-user-entries?id=${profile.id}`)
      ).json();

      if (res.results.length > 0) {
        setEntries(res.results);
      }
    };

    results();
  }, []);

  if (isLoading || !profile) {
    return <>Loading...</>;
  }

  const onSubmit = async ({ title, body }: { title: string; body: string }) => {
    // TODO: use react-query
    const { status } = await fetch("/api/vignette/post-entry", {
      method: "POST",
      body: JSON.stringify({
        id: profile.id,
        title,
        body,
      }),
    });

    console.log(status);
  };

  return (
    <>
      <SEO page="Vignettes" />
      <PageWrapper>
        <h1>Edit Vignettes</h1>
        <p>You get 5 vignettes per week.</p>

        <p>The latest vignettes are randomised and displayed.</p>

        {entries.length < 5 && (
          <>
            <Prompt />
            <WritingSection aria-label="Writing section">
              <StyledForm onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="title">
                  <StyledInput
                    aria-label="title"
                    id="title"
                    placeholder="What's the title?"
                    type="text"
                    maxLength={64}
                    {...register("title", { maxLength: 64, required: true })}
                  />
                  {errors.email?.type === "maxLength" && (
                    <StyledWarning>
                      Title cannot have more than 64 characters.
                    </StyledWarning>
                  )}
                </label>
                <label htmlFor="body">
                  <StyledTextArea
                    aria-label="body"
                    id="body"
                    placeholder="Express yourself"
                    maxLength={500}
                    {...register("body", { required: true })}
                    onChange={(e) => setCharacterCount(e.target.value.length)}
                  />
                </label>
                <WritingSectionFooter>
                  <CharacterCountSection>
                    <CounterSpan
                      aria-label="character count"
                      color={characterCount > 450 ? "darkviolet" : undefined}
                    >
                      {characterCount}
                    </CounterSpan>
                    / 500
                  </CharacterCountSection>
                  <GenericButton type="submit" disabled={characterCount < 1}>
                    Submit
                  </GenericButton>
                </WritingSectionFooter>
              </StyledForm>
            </WritingSection>
          </>
        )}

        {entries.length > 0 && (
          <PastVignettesSection>
            <h2>Past vignettes</h2>

            {entries.map((item: any, idx) => (
              <StyledDetails key={idx}>
                <summary>{item.title}</summary>
                <p>{item.body}</p>
              </StyledDetails>
            ))}
          </PastVignettesSection>
        )}
      </PageWrapper>
    </>
  );
};

export default EditVignette;
