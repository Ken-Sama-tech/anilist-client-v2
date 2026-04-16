import type { Character, CharacterRole } from "../../Character/index.js";
import type { Staff } from "../../Staff/index.js";

export type MediaCharacter = {
  character: Character;
  characterName: string;
  dubGroup: string;
  id: number;
  role: CharacterRole;
  roleNotes: string;
  voiceActor: Staff;
};
