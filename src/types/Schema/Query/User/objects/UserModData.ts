import type { JSONArr, JSONObj } from "../../../Scalars/index.js";
import type { User } from "./User.js";

export type UserModData = {
  alts: User[];
  bans: JSONArr;
  counts: JSONArr | JSONObj;
  email: string;
  ip: JSONArr | JSONObj;
  privacy: number;
};
