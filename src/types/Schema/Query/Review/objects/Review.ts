import type { Media, MediaType } from "../../Media/index.js";
import type { User } from "../../User/index.js";
import type { ReviewRating } from "../index.js";

export type Review = {
  body: string;
  createdAt: number;
  id: number;
  media: Media;
  mediaId: number;
  mediaType: MediaType;
  private: boolean;
  rating: number;
  ratingAmount: number;
  score: number;
  siteUrl: string;
  summary: string;
  updatedAt: number;
  user: User;
  userId: number;
  userRating: ReviewRating;
};
