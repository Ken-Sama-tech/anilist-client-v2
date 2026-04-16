import type { Thread } from "../../Thread/index.js";
import type { ThreadComment } from "../../ThreadComment/index.js";
import type { Common } from "./Common.js";

export type ThreadCommentSubscribedNotification = Omit<
  Common,
  "activity" | "activityId"
> & {
  comment: ThreadComment;
  commentId: number;
  thread: Thread;
};
