import type { Common } from "./Common.js";

export type FollowingNotification = Omit<Common, "activity" | "activityId">;
