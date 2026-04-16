import type { UserSort } from "../../User/index.js";

export type FollowingArguments = {
  userId: number;
  sort: UserSort[];
};
