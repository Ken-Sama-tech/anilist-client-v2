import type { MediaTag } from "../../Media/index.js";

export type UserTagStatistic = {
  chaptersRead: number;
  count: number;
  meanScore: number;
  mediaIds: number[];
  minutesWatched: number;
  tag: MediaTag;
};
