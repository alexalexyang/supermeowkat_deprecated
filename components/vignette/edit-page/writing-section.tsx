import {
  CharacterCountSection,
  CounterSpan,
  StyledInput,
  StyledTextArea,
  WritingSectionFooter,
  WritingSectionWrapper,
} from "../../../styles/page-styles/vignette-edit-page-styles";
import { useMutation, useQueryClient } from "react-query";

import { GenericButton } from "../../../styles/buttons";
import { NextPage } from "next";
import { StyledForm } from "../../../styles/forms";
import { StyledWarning } from "../../../styles/misc-styles";
import { UserProfileProps } from "../../../types/types";
import { addEditVignette } from "../../../pages/vignettes/helpers";
import { useForm } from "react-hook-form";
import { useState } from "react";

interface Props {
  profile: UserProfileProps;
}

const WritingSection: NextPage<Props> = ({ profile }: Props) => {
  const [characterCount, setCharacterCount] = useState<number>(0);

  const queryClient = useQueryClient();
  const addEditEntry = useMutation(addEditVignette, {
    onSuccess: async (data) => {
      const { entry } = await data.json();

      // TODO: get user vignettes, replace, then replace.
      queryClient.setQueryData("user-vignettes", { ...entry });
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async ({ title, body }: { title: string; body: string }) => {
    addEditEntry.mutate({
      title,
      body,
      userId: profile.id,
    });
  };

  return (
    <WritingSectionWrapper aria-label="Writing section">
      {addEditEntry.isLoading && (
        <div>
          <p>Updating profile...</p>
        </div>
      )}
      {addEditEntry.isSuccess && (
        <div>
          <p>Profile updated!</p>
        </div>
      )}
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
    </WritingSectionWrapper>
  );
};

export default WritingSection;