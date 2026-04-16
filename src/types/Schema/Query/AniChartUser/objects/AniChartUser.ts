import type { User } from "../../User/index.js";
import type { JSONObj, JSONArr } from "../../../Scalars/index.js";

export type AniChartUser = {
  highlights: JSONObj | JSONArr;
  settings: JSONObj | JSONArr;
  user: User;
};
