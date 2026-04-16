import type { MediaFormat } from "../../Media/index.js";

export type UserFormatStatistic = {
  chaptersRead: number;
  count: number;
  format: MediaFormat;
  meanScore: number;
  mediaIds: number[];
  minutesWatched: number;
};
