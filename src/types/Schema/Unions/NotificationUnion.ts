import type {
  ActivityLikeNotification,
  ActivityMentionNotification,
  ActivityMessageNotification,
  ActivityReplyLikeNotification,
  ActivityReplyNotification,
  ActivityReplySubscribedNotification,
  AiringNotification,
  FollowingNotification,
  ThreadCommentMentionNotification,
  ThreadCommentReplyNotification,
  ThreadCommentSubscribedNotification,
  ThreadCommentLikeNotification,
  ThreadLikeNotification,
  RelatedMediaAdditionNotification,
  MediaDataChangeNotification,
  MediaMergeNotification,
  MediaDeletionNotification,
} from "../Query/Notification/index.js";

export type NotificationUnion =
  | AiringNotification
  | FollowingNotification
  | ActivityMessageNotification
  | ActivityMentionNotification
  | ActivityMentionNotification
  | ActivityReplyNotification
  | ActivityReplySubscribedNotification
  | ActivityLikeNotification
  | ActivityReplyLikeNotification
  | ThreadCommentMentionNotification
  | ThreadCommentReplyNotification
  | ThreadCommentSubscribedNotification
  | ThreadCommentLikeNotification
  | ThreadLikeNotification
  | RelatedMediaAdditionNotification
  | MediaDataChangeNotification
  | MediaMergeNotification
  | MediaDeletionNotification;
