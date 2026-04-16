import type { AiringSort } from "../index.js";

export type AiringScheduleArguments = {
  id: number;
  mediaId: number;
  episode: number;
  airingAt: number;
  notYetAired: boolean;
  id_not: number;
  id_in: number[];
  id_not_in: number[];
  mediaId_not: number;
  mediaId_in: number[];
  mediaId_not_in: number[];
  episode_not: number;
  episode_in: number[];
  episode_not_in: number[];
  episode_greater: number[];
  episode_lesser: number[];
  airingAt_greater: number;
  airingAt_lesser: number;
  sort: AiringSort[];
};
