import type { Studio } from "../index.js";

export type StudioEdge = {
  favouriteOrder: number;
  id: number;
  isMain: boolean;
  node: Studio;
};
