import type { CharacterRole } from "../../Character/index.js";
import type { Staff } from "../../Staff/index.js";
import type { CharacterSubmission, StaffSubmission } from "../index.js";

export type CharacterSubmissionEdge = {
  node: CharacterSubmission;
  role: CharacterRole;
  submittedVoiceActors: StaffSubmission;
  voiceActors: Staff[];
};
