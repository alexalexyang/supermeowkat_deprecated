import {
  ReactionIconType,
  VignetteRQPageProps,
} from "../../../types/vignette-types";
import { useInfiniteQuery, useMutation, useQueryClient } from "react-query";

import Anger from "../../../styles/icons/anger-icon";
import CatUnicorn from "../../../styles/icons/cat-unicorn-icon";
import NoStopping from "../../../styles/icons/no-stopping-icon";
import SolidHeart from "../../../styles/icons/heart-solid-icon";
import TropicalFlower from "../../../styles/icons/tropical-flower-icon";
import YellowUmbrella from "../../../styles/icons/yellow-umbrella-icon";
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
      if (!lastPage || !lastPage[lastPage.length - 1]) {
        return;
      }

      return lastPage[lastPage.length - 1]._id;
    },
    refetchOnMount: "always",
  });

export const getReactionIcon = (reactionType: ReactionIconType) => {
  switch (reactionType) {
    case "cat-unicorn":
      return <CatUnicorn />;
    case "heart":
      return <SolidHeart />;
    case "flower":
      return <TropicalFlower />;
    case "umbrella":
      return <YellowUmbrella />;
    case "stop-sign":
      return <NoStopping />;
    case "angry-face":
      return <Anger />;
    default:
      return;
  }
};

interface PostReactionProps {
  newReactionType: ReactionIconType;
  userId: string;
  entryId: string;
}

export const postReaction = async ({
  newReactionType,
  userId,
  entryId,
}: PostReactionProps) =>
  await fetch("/api/vignette/post-reaction", {
    method: "POST",
    body: JSON.stringify({
      id: userId,
      entryId,
      reaction: newReactionType,
    }),
  });

export const useMutateReaction = () => {
  const queryClient = useQueryClient();
  return useMutation(postReaction, {
    onMutate: async ({ newReactionType, entryId, userId }) => {
      await queryClient.cancelQueries("vignettes");
      const previousVignettes = queryClient.getQueryData("vignettes");

      queryClient.setQueryData<VignetteRQPageProps>(
        "vignettes",
        (oldVignettes) => {
          const old = oldVignettes as VignetteRQPageProps;
          const { pages } = old;

          const updated = pages.map((oldPage) =>
            oldPage.map((oldItem) => {
              if (oldItem._id === entryId) {
                // If user has never reacted to this entry before.
                const isNewReaction = !oldItem.reactions.some(
                  (reaction) => reaction.user_id === userId
                );

                if (isNewReaction) {
                  return {
                    ...oldItem,
                    reactions: [
                      ...oldItem.reactions,
                      {
                        _id: "temp_id",
                        entryId,
                        user_id: userId,
                        reaction: newReactionType,
                      },
                    ],
                  };
                }

                // If user is updating their reaction.
                const updatedReactions = oldItem.reactions.map(
                  (oldReaction) => {
                    if (oldReaction.user_id === userId) {
                      return { ...oldReaction, reaction: newReactionType };
                    }
                    return oldReaction;
                  }
                );

                // Other users' reactions.
                return { ...oldItem, reactions: updatedReactions };
              }

              return oldItem;
            })
          );

          return { ...old, pages: updated };
        }
      );

      return { previousVignettes };
    },

    // onError never seems to work.
    // onError: (err, newReactionType, context) => {
    //   queryClient.setQueryData("vignettes", context.previousVignettes);
    // },

    // onSettled seems to do what onError does. It resets to previous state on error.
    onSettled: () => {
      queryClient.invalidateQueries("vignettes");
    },
  });
};
