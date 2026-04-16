import type { CharacterSort } from "../index.js";

export type CharacterArguments = {
  id: number;
  isBirthday: boolean;
  search: string;
  id_not: number;
  id_in: number[];
  id_not_in: number[];
  sort: CharacterSort[];
};
