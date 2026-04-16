import type { Media } from "../../Media/index.js";
import type { NotificationType } from "../index.js";

export type MediaMergeNotification = {
  context: string;
  createdAt: number;
  deletedMediaTitles: string[];
  id: number;
  media: Media;
  mediaId: number;
  reason: string;
  type: NotificationType;
};
