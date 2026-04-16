import type { ActivityUnion } from "../../../Unions/index.js";
import type { NotificationType } from "../index.js";
import type { User } from "../../User/index.js";

export type Common = {
  activity: ActivityUnion;
  activityId: number;
  context: string;
  createdAt: number;
  id: number;
  type: NotificationType;
  user: User;
  userId: number;
};
