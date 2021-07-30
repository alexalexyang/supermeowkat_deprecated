import { useInfiniteQuery, useQuery } from "react-query";

import { VignetteUserEntryProps } from "../../types/types";
import fetch from "isomorphic-unfetch";

const fetchPage = async (pageParam: string) => {
  const { entries } = await (
    await fetch("/api/vignette/get-paginated-entries", {
      method: "POST",
      body: JSON.stringify({
        lastEntryId: pageParam,
      }),
    })
  ).json();

  return entries;
};

export const useGetVignettes = () =>
  useInfiniteQuery("vignettes", ({ pageParam }) => fetchPage(pageParam), {
    getNextPageParam: (lastPage) => {
      if (!lastPage) {
        return;
      }

      return lastPage[lastPage.length - 1]._id;
    },
    refetchOnMount: "always",
  });

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
}: VignetteUserEntryProps) =>
  fetch("/api/vignette/post-entry", {
    method: "POST",
    body: JSON.stringify({
      userId,
      _id,
      title,
      body,
    }),
  });
