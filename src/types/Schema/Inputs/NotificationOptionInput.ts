import type { NotificationType } from "../Query/Notification/index.js";

export type NotificationOptionInput = {
  enabled: boolean;
  type: NotificationType;
};
