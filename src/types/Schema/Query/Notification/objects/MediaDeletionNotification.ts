import type { NotificationType } from "../index.js";

export type MediaDeletionNotification = {
  context: string;
  createdAt: number;
  deletedMediaTitle: string;
  id: number;
  reason: string;
  type: NotificationType;
};
