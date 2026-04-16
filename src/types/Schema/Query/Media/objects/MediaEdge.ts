import type { Character, CharacterRole } from "../../Character/index.js";
import type { Staff, StaffRoleType } from "../../Staff/index.js";
import type { MediaRelation, Media } from "../index.js";

export type MediaEdge = {
  characterName: string;
  characterRole: CharacterRole;
  characters: Character[];
  dubGroup: string;
  favouriteOrder: number;
  id: number;
  isMainStudio: boolean;
  node: Media;
  relationType: MediaRelation;
  roleNotes: String;
  staffRole: string;
  voiceActorRoles: StaffRoleType[];
  voiceActors: Staff[];
};
