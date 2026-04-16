import type { PageInfo } from "../../Page/index.js";
import type { Review, ReviewEdge } from "../index.js";

export type ReviewConnection = {
  edges: ReviewEdge[];
  nodes: Review[];
  pageInfo: PageInfo;
};
