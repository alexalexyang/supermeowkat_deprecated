export const ReactionIcons = [
  "cat-unicorn",
  "heart",
  "flower",
  "umbrella",
  "stop-sign",
  "angry-face",
] as const;

export type ReactionIconType = typeof ReactionIcons[number];

export interface ReactionProps {
  _id: string; // Reaction Id
  entryId: string;
  user_id: string;
  reaction: ReactionIconType;
}

export interface VignetteProps {
  _id: string; // Entry Id
  title: string;
  body: string;
  reactions: ReactionProps[];
}

export type UserVignetteProps = {
  userId: string;
  _id?: string; // Entry Id
  title: string;
  body: string;
};

export type VignetteRQPageProps = {
  pages: VignetteProps[][];
  params: unknown[];
};
