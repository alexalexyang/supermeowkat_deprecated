import {
  CharacterCountSection,
  CounterSpan,
  StyledInput,
  StyledTextArea,
  WritingSectionFooter,
  WritingSectionWrapper,
} from "../../../styles/vignette/vignette-edit-page-styles";
import { useMutation, useQueryClient } from "react-query";

import { GenericButton } from "../../../styles/buttons";
import { NextPage } from "next";
import { StyledForm } from "../../../styles/forms";
import { StyledWarning } from "../../../styles/misc-styles";
import { UserProfileProps } from "../../../types/types";
import { VignetteUserEntryProps } from "../../../types/vignette-types";
import { addEditVignette } from "../helpers";
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
      const { data: updatedEntry } = await data.json();

      const cachedEntries =
        (queryClient.getQueryData(
          "user-vignettes"
        ) as VignetteUserEntryProps[]) ?? [];

      cachedEntries.push(updatedEntry);

      queryClient.setQueryData("user-vignettes", cachedEntries);
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
          <p>Adding vignette...</p>
        </div>
      )}
      {addEditEntry.isSuccess && (
        <div>
          <p>Vignette updated!</p>
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
