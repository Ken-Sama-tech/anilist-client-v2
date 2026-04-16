import type { User } from "../../User/index.js";
import type { Media } from "../../Media/index.js";
import type { Common } from "./Common.js";

export type ListActivity = Common & {
  media: Media;
  progress: string;
  status: string;
  user: User;
  userId: number;
};
