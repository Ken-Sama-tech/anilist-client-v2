import type { MediaCharacter, MediaExternalLink } from "../../Media/index.js";
import type { MediaSubmissionEdge } from "../index.js";
import type { StaffEdge } from "../../Staff/index.js";
import type { StudioEdge } from "../../Studio/index.js";

export type MediaSubmissionComparison = {
  character: MediaCharacter;
  externalLink: MediaExternalLink;
  staff: StaffEdge;
  studio: StudioEdge;
  submission: MediaSubmissionEdge;
};
