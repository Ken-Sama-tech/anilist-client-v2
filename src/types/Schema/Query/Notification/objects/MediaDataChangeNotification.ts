import type { Media } from "../../Media/index.js";
import type { NotificationType } from "../index.js";

export type MediaDataChangeNotification = {
  context: string;
  createdAt: number;
  id: number;
  media: Media;
  mediaId: number;
  reason: string;
  type: NotificationType;
};
