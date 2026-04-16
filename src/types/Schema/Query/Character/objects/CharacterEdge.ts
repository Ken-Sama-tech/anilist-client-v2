import type { Media } from "../../Media/index.js";
import type { Character, CharacterRole } from "../index.js";
import type { StaffRoleType } from "../../Staff/index.js";

export type CharacterEdge = {
  favouriteOrder: number;
  id: number;
  media: Omit<Media, "characters">[];
  name: string;
  node: Character;
  role: CharacterRole;
  voiceActorRoles: StaffRoleType[];
};
