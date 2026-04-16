import type { Media } from "../../Media/index.js";
import type { User } from "../../User/index.js";
import type { RecommendationRating } from "../index.js";

export type Recommendation = {
  id: number;
  media: Media;
  mediaRecommendation: Media;
  rating: number;
  user: User;
  userRating: RecommendationRating;
};
