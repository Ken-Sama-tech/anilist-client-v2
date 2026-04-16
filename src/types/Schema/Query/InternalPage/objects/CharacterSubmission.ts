import type { Common } from "./Common.js";
import type { Character } from "../../Character/index.js";

export type CharacterSubmission = Common & {
  submission: Character;
  character: Character;
};
