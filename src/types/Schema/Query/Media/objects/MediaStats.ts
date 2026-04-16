import type { AiringProgression } from "../../AiringSchedule/index.js";
import type {
  ScoreDistribution,
  StatusDistribution,
} from "../../User/index.js";

export type MediaStats = {
  /**@deprecated reason: Replaced by MediaTrends*/
  airingProgression: AiringProgression[];
  scoreDistribution: ScoreDistribution[];
  statusDistribution: StatusDistribution[];
};
