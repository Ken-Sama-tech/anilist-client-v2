import type { Media, MediaEdge } from "../index.js";
import type { PageInfo } from "../../Page/index.js";

export type MediaConnection = {
  edges: MediaEdge[];
  nodes: Media[];
  pageInfo: PageInfo;
};
