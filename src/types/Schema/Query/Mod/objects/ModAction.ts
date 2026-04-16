import type { User } from "../../User/index.js";
import type { ModActionType } from "../index.js";

export type ModAction = {
  createdAt: number;
  data: string;
  id: number;
  mod: User;
  objectId: number;
  objectType: string;
  type: ModActionType;
  user: User;
};
