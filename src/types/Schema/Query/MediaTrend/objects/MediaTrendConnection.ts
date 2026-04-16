import type { MediaTrend, MediaTrendEdge } from "../index.js";
import type { PageInfo } from "../../Page/index.js";

export type MediaTrendConnection = {
  edges: MediaTrendEdge[];
  nodes: MediaTrend[];
  pageInfo: PageInfo;
};
