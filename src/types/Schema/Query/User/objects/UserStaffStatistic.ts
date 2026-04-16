import type { Staff } from "../../Staff/index.js";

export type UserStaffStatistic = {
  chaptersRead: number;
  count: number;
  meanScore: number;
  mediaIds: number[];
  minutesWatched: number;
  staff: Staff;
};
