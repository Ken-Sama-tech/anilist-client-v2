import type { PageInfo } from "../../Page/index.js";
import type { CharacterSubmissionEdge, CharacterSubmission } from "../index.js";

export type CharacterSubmissionConnection = {
  edges: CharacterSubmissionEdge;
  nodes: CharacterSubmission;
  pageInfo: PageInfo;
};
