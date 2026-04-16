import type { AiringSchedule, AiringScheduleEdge } from "../index.js";
import type { PageInfo } from "../../Page/index.js";

export type AiringScheduleConnection = {
  edges: AiringScheduleEdge[];
  nodes: AiringSchedule[];
  pageInfo: PageInfo;
};
