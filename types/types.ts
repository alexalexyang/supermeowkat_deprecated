import { ComponentType, Dispatch, SetStateAction } from "react";

export type IconProps = {
  className?: string;
  color?: string;
  alt?: string;
};

export enum RequestStatus {
  Pending = "pending",
  Success = "success",
  Error = "error",
  Idle = "idle",
}

export interface ContentRequest<T> {
  status: RequestStatus;
  data?: T;
  message?: string;
  fetchStatus: RequestStatus;
}

export interface StateProps<T> {
  set: ContentRequest<T>;
  setSet: Dispatch<SetStateAction<ContentRequest<T>>>;
}

export type RenderComponent = ComponentType;

export interface SwipeFuncProps {
  noFunc: any;
  yesFunc: any;
}

export interface ContentProps {
  id: string;
  originalTitle?: string;
  title?: string;
  releaseDate?: string;
  productionCountries?: string[];
  languages?: string[];
  images?: string[];
  trailers?: { url?: string; type?: string }[];
  synopsis?: string;
  authors?: string[];
  editOn?: { org?: string; url?: string }[];
  likes?: number;
}

export interface TmdbMovieProps {
  id: string;
  original_title: string;
  title: string;
  release_date: string;
  production_countries: string[];
  poster_path: string;
  trailer: string;
  overview: string;
  trailerType: string;
}

export type UserProfileProps = {
  id: string;
  auth0Id: string;
  age: string;
  birthday: string;
  handle: string;
  email: string;
  gender: string;
  city: string;
  country: string;
  job: string;
};

export type VignetteEntryProps = {
  userId: string;
  entryId?: string;
  title: string;
  body: string;
};
