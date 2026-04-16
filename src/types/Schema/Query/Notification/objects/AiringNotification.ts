import type { Media } from "../../Media/index.js";
import type { NotificationType } from "../index.js";

export type AiringNotification = {
  animeId: number;
  contexts: string[];
  createdAt: number;
  episode: number;
  id: number;
  media: Media;
  type: NotificationType;
};
