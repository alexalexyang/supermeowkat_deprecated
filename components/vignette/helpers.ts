import { VignetteEntryProps } from "../../types/types";
import fetch from "isomorphic-unfetch";
import { useQuery } from "react-query";

export const useGetVignettes = ({ lastEntryId }: { lastEntryId?: string }) =>
  useQuery(
    "vignettes",
    async () => {
      const { entries } = await (
        await fetch("/api/vignette/get-paginated-entries", {
          method: "POST",
          body: JSON.stringify({
            lastEntryId,
          }),
        })
      ).json();

      return entries;
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
