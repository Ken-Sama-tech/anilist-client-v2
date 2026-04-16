import type { ReviewSort } from "../enums/ReviewSort.js";

export type ReviewArguments = {
  id: number;
  mediaId: number;
  userId: number;
  mediaType: number;
  sort: ReviewSort[];
};
