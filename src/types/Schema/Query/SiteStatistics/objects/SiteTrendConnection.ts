import type { PageInfo } from "../../Page/index.js";
import type { SiteTrend, SiteTrendEdge } from "../index.js";

export type SiteTrendConnection = {
  edges: SiteTrendEdge[];
  nodes: SiteTrend[];
  pageInfo: PageInfo;
};
