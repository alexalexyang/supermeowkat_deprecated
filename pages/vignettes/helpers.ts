import { VignetteEntryProps } from "../../types/types";
import fetch from "isomorphic-unfetch";
import { useQuery } from "react-query";

export const useGetVignettes = () =>
  useQuery(
    "vignettes",
    async () => {
      const { results } = await (
        await fetch(`/api/vignette/get-entries`)
      ).json();

      return results;
    },
    { refetchOnMount: "always" }
  );

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
  entryId,
  title,
  body,
}: VignetteEntryProps) =>
  fetch("/api/vignette/post-entry", {
    method: "POST",
    body: JSON.stringify({
      userId,
      entryId,
      title,
      body,
    }),
  });
