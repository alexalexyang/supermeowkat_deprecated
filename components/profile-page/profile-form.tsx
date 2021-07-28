import { Input, StyledForm } from "../../styles/forms";
import { useMutation, useQueryClient } from "react-query";

import { GenericButton } from "../../styles/buttons";
import { NextPage } from "next";
import { StyledWarning } from "../../styles/misc-styles";
import { UserProfileProps } from "../../types/types";
import { updateUserProfile } from "../../utils/user-profile";
import { useForm } from "react-hook-form";

interface Props {
  profile: UserProfileProps;
}

const ProfileForm: NextPage<Props> = ({ profile }: Props) => {
  const { id, age, birthday, email, handle, gender, city, country, job } =
    profile;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { age, birthday, email, handle, gender, city, country, job },
  });

  const queryClient = useQueryClient();
  const updateProfile = useMutation(updateUserProfile, {
    onSuccess: async (data) => {
      const { userData } = await data.json();
      queryClient.setQueryData("user", { ...profile, ...userData });
    },
  });

  const onSubmit = async (formData: { [key: string]: string }) => {
    const keys = Object.keys(profile).filter(
      (key) => key !== "id" && key !== "auth0Id"
    );

    const changedFields = keys.filter(
      (key) =>
        formData[key] &&
        formData[key] !== profile[key as keyof UserProfileProps]
    );

    const userData: Record<string, string> = {};

    changedFields.forEach((field) => (userData[field] = formData[field]));

    updateProfile.mutate({ id, userData });
  };

  return (
    <>
      {updateProfile.isLoading && (
        <div>
          <p>Updating profile...</p>
        </div>
      )}
      {updateProfile.isSuccess && (
        <div>
          <p>Profile updated!</p>
        </div>
      )}
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">
          Email
          <Input
            id="email"
            placeholder="What's your email?"
            type="email"
            {...register("email", { maxLength: 64 })}
          />
          {errors.email?.type === "maxLength" && (
            <StyledWarning>
              Email cannot have more than 64 characters.
            </StyledWarning>
          )}
        </label>

        <label htmlFor="handle">
          Handle
          <Input
            id="handle"
            placeholder="What's your handle?"
            type="text"
            {...register("handle", { maxLength: 32 })}
          />
          {errors.handle?.type === "maxLength" && (
            <StyledWarning>
              Handle cannot have more than 32 characters.
            </StyledWarning>
          )}
        </label>

        <label htmlFor="age">
          Age
          <Input
            id="age"
            type="number"
            {...register("age", { required: true, min: 18 })}
          />
          {errors.age?.type === "min" && (
            <StyledWarning>Minimum age must be 18.</StyledWarning>
          )}
          {errors.age?.type === "required" && (
            <StyledWarning>Age is required.</StyledWarning>
          )}
        </label>

        <label htmlFor="birthday">
          Birthday
          <Input id="birthday" type="date" {...register("birthday")} />
        </label>

        <label htmlFor="gender">
          Gender
          <Input
            id="gender"
            placeholder="What's your gender?"
            type="text"
            {...register("gender", { maxLength: 32 })}
          />
          {errors.gender?.type === "maxLength" && (
            <StyledWarning>
              Gender cannot have more than 32 characters.
            </StyledWarning>
          )}
        </label>

        <label htmlFor="job">
          Job
          <Input
            id="job"
            placeholder="What's your job?"
            type="text"
            {...register("job", { maxLength: 32 })}
          />
          {errors.job?.type === "maxLength" && (
            <StyledWarning>
              Job cannot have more than 32 characters.
            </StyledWarning>
          )}
        </label>

        <label htmlFor="country">
          Country
          <Input
            id="country"
            placeholder="What's your country?"
            type="text"
            {...register("country", { maxLength: 64 })}
          />
          {errors.country?.type === "maxLength" && (
            <StyledWarning>
              Country cannot have more than 64 characters.
            </StyledWarning>
          )}
        </label>

        <label htmlFor="city">
          City
          <Input
            id="city"
            placeholder="What's your city?"
            type="text"
            {...register("city", { maxLength: 64 })}
          />
          {errors.city?.type === "maxLength" && (
            <StyledWarning>
              City cannot have more than 64 characters.
            </StyledWarning>
          )}
        </label>

        <GenericButton type="submit" disabled={false}>
          Submit
        </GenericButton>
      </StyledForm>
    </>
  );
};

export default ProfileForm;
