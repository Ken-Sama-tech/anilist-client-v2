import type { MediaListStatus } from "../../MediaList/index.js";

export type UserStatusStatistic = {
  chaptersRead: number;
  count: number;
  meanScore: number;
  mediaIds: number[];
  minutesWatched: number;
  status: MediaListStatus;
};
