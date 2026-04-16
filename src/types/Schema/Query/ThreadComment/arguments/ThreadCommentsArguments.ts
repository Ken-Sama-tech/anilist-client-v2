import type { ThreadCommentSort } from "../index.js";

export type ThreadCommentsArguments = {
  id: number;
  threadId: number;
  userId: number;
  sort: ThreadCommentSort[];
};
