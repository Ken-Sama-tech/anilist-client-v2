import type { Common } from "./Common.js";
import type { MessageActivity } from "../../Activity/index.js";

export type ActivityMessageNotification = Common & {
  message: MessageActivity;
};
