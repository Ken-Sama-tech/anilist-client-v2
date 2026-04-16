import type { User } from "../../User/index.js";
import type { Common } from "./Common.js";

export type TextActivity = Common & {
  text: string;
  user: User;
  userId: number;
};
