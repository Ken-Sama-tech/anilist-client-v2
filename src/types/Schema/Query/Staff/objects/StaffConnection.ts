import type { StaffEdge, Staff } from "../index.js";
import type { PageInfo } from "../../Page/index.js";

export type StaffConnection = {
  edges: StaffEdge[];
  nodes: Staff[];
  pageInfo: PageInfo;
};
