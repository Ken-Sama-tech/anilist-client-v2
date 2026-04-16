import type { StaffSort } from "../index.js";

export type StaffArguments = {
  id: number;
  isBirthday: boolean;
  search: string;
  id_not: number;
  id_in: number[];
  id_not_in: number;
  sort: StaffSort[];
};
