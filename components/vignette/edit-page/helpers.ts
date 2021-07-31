import { UserVignetteProps } from "../../../types/vignette-types";
import fetch from "isomorphic-unfetch";
import { useQuery } from "react-query";

export const useGetUserVignettes = (userId: string | undefined) =>
  useQuery(
    ["user-vignettes", userId],
    async () => {
      const { data } = await (
        await fetch(`/api/vignette/get-user-entries?id=${userId}`)
      ).json();

      return data;
    },
    { enabled: !!userId }
  );

export const addEditVignette = ({
  userId,
  _id,
  title,
  body,
}: UserVignetteProps) =>
  fetch("/api/vignette/post-entry", {
    method: "POST",
    body: JSON.stringify({
      userId,
      _id,
      title,
      body,
    }),
  });
