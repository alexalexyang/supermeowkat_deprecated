import { UserProfileProps } from "../types/types";
import fetch from "isomorphic-unfetch";
import { useQuery } from "react-query";

export const useGetUserProfile = () =>
  useQuery("user", async () => {
    const fetchUser = await fetch("/api/user-profile/get-user-profile-auth0");
    const userDataAuth0 = fetchUser.ok ? await fetchUser.json() : undefined;

    if (!userDataAuth0) {
      return undefined;
    }

    const {
      userProfile: {
        _id,
        auth0_id,
        age,
        birthday,
        handle,
        gender,
        city,
        country,
        job,
      },
      success,
    } = await (
      await fetch(`/api/user-profile/get-user-profile`, {
        method: "POST",
        body: JSON.stringify({
          auth0_id: userDataAuth0.sub.split("|")[1],
        }),
      })
    ).json();
    console.log("_id: ", _id);

    if (!success) {
      return undefined;
    }

    const userData: UserProfileProps = {
      id: _id,
      auth0Id: auth0_id,
      age,
      birthday,
      handle,
      email: userDataAuth0.email,
      gender,
      city,
      country,
      job,
    };

    return userData;
  });

type UpdateUserProps = {
  id: string;
  userData: Record<string, string>;
};

export const updateUserProfile = (updates: UpdateUserProps) =>
  fetch("/api/user-profile/update-user-profile", {
    method: "POST",
    body: JSON.stringify(updates),
  });
