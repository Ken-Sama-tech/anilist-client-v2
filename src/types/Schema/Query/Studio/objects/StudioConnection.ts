import type { Studio, StudioEdge } from "../index.js";
import type { PageInfo } from "../../Page/index.js";

export type StudioConnection = {
  edges: StudioEdge[];
  nodes: Studio[];
  pageInfo: PageInfo;
};
