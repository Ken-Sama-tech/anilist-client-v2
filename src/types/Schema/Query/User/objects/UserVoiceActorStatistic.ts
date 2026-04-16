import type { Staff } from "../../Staff/index.js";

export type UserVoiceActorStatistic = {
  chaptersRead: number;
  count: number;
  meanScore: number;
  mediaIds: number[];
  minutesWatched: number;
  voiceActor: Staff;
};
