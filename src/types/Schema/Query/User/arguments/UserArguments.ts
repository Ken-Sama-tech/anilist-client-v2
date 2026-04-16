import type { UserSort } from "../index.js";

export type UserArguments = {
  id: number;
  name: string;
  isModerator: boolean;
  search: string;
  sort: UserSort[];
};
