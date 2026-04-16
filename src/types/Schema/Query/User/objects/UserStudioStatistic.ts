import type { Studio } from "../../Studio/index.js";

export type UserStudioStatistic = {
  chaptersRead: number;
  count: number;
  meanScore: number;
  mediaIds: number[];
  minutesWatched: number;
  studio: Studio;
};
