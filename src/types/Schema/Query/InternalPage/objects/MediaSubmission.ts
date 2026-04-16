import type { JSONArr, JSONObj } from "../../../Scalars/index.js";
import type { Media, MediaEdge } from "../../Media/index.js";
import type { Common } from "./Common.js";
import type { MediaSubmissionComparison } from "../index.js";

export type MediaSubmission = Common & {
  changes: string[];
  characters: MediaSubmissionComparison[];
  externalLinks: MediaSubmissionComparison[];
  relations: MediaEdge;
  staff: MediaSubmissionComparison[];
  studios: MediaSubmissionComparison[];
  submission: Media;
  submitterStats: JSONObj | JSONArr;
};
