import type { NotificationType } from "../index.js";

export type NotificationArguments = {
  type: NotificationType;
  resetNotificationCount: boolean;
  type_in: NotificationType[];
};
