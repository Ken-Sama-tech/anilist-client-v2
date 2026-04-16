import type { Recommendation, RecommendationEdge } from "../index.js";
import type { PageInfo } from "../../Page/index.js";

export type RecommendationConnection = {
  edges: RecommendationEdge[];
  nodes: Recommendation[];
  page: PageInfo;
};
