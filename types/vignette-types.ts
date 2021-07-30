export type ReactionTypes =
  | "cat-unicorn"
  | "heart"
  | "flower"
  | "umbrella"
  | "stop-sign"
  | "angry-face";

export interface ReactionProps {
  _id: string; // Reaction Id
  entryId: string;
  user_id: string;
  reaction: ReactionTypes;
}

export interface VignetteEntryProps {
  _id: string; // Entry Id
  title: string;
  body: string;
  reactions: ReactionProps[];
}

export type VignetteUserEntryProps = {
  userId: string;
  _id?: string; // Entry Id
  title: string;
  body: string;
};
