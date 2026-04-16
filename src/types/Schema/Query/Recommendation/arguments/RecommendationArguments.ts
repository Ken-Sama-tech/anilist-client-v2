import type { RecommendationSort } from "../index.js";

export type RecommendationArguments = {
  id: number;
  mediaId: number;
  mediaRecommendationId: number;
  userId: number;
  rating: number;
  onList: boolean;
  rating_greater: number;
  rating_lesser: number;
  sort: RecommendationSort[];
};
