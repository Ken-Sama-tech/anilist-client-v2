import type { Character, CharacterRole } from "../../Character/index.js";
import type { Media, MediaExternalLink } from "../../Media/index.js";
import type { Staff } from "../../Staff/index.js";
import type { Studio } from "../../Studio/index.js";

export type MediaSubmissionEdge = {
  character: Character;
  characterName: string;
  characterRole: CharacterRole;
  characterSubmission: Character;
  dubGroup: string;
  externalLink: MediaExternalLink;
  id: number;
  isMain: boolean;
  media: Media;
  roleNotes: string;
  staff: Staff;
  staffRole: string;
  staffSubmission: Staff;
  studio: Studio;
  voiceActor: Staff;
  voiceActorSubmission: Staff;
};
