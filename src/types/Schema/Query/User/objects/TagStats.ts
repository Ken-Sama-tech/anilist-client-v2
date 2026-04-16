import type { MediaTag } from "../../Media/index.js";

export type TagStats = {
  amount: number;
  meanScore: number;
  tag: MediaTag;
  timeWatched: number;
};
