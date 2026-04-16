import type { Studio } from "../../Studio/index.js";

export type StudioStats = {
  amount: number;
  meanScore: number;
  studio: Studio;
  timeWatched: number;
};
