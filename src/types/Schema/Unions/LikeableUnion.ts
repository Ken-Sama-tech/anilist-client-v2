import type {
  ListActivity,
  MessageActivity,
  TextActivity,
} from "../Query/Activity/index.js";
import type { ActivityReply } from "../Query/ActivityReply/index.js";
import type { Thread } from "../Query/Thread/index.js";
import type { ThreadComment } from "../Query/ThreadComment/index.js";

export type LikeableUnion =
  | ListActivity
  | TextActivity
  | MessageActivity
  | ActivityReply
  | Thread
  | ThreadComment;
