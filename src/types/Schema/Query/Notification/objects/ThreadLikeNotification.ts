import type { Common } from "./Common.js";
import type { ThreadComment } from "../../ThreadComment/index.js";
import type { Thread } from "../../Thread/index.js";

export type ThreadLikeNotification = Omit<Common, "activity" | "activityId"> & {
  comment: ThreadComment;
  thread: Thread;
  threadId: number;
};
