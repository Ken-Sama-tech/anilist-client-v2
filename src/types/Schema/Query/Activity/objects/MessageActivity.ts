import type { User } from "../../User/index.js";
import type { Common } from "./Common.js";

export type MessageActivity = Common & {
  message: string;
  messenger: User;
  messengerId: number;
  recipient: User;
  recipientId: number;
};
