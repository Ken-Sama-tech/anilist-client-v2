import type { User } from "../../User/index.js";
import type { ActivityReply } from "../../ActivityReply/index.js";
import type { ActivityType } from "../index.js";

export type Common = {
  createdAt: number;
  id: number;
  isLiked: boolean;
  isLocked: boolean;
  isPinned: boolean;
  isSubscribed: boolean;
  likeCount: number;
  likes: User[];
  replies: ActivityReply[];
  replyCount: number;
  siteUrl: string;
  type: ActivityType;
};
