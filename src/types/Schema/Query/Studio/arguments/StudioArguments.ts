import type { StudioSort } from "../index.js";

export type StudioArguments = {
  id: number;
  search: string;
  id_not: number;
  id_in: number[];
  id_not_in: number[];
  sort: StudioSort[];
};
