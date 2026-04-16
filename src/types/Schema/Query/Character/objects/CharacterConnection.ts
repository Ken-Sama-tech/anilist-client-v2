import type { PageInfo } from "../../Page/index.js";
import type { Character, CharacterEdge } from "../index.js";

export type CharacterConnection = {
  edges: CharacterEdge[];
  nodes: Character;
  pageInfo: PageInfo;
};
