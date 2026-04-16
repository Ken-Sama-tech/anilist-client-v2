import type { CharacterConnection } from "../../Character/index.js";
import type { MediaConnection } from "../../Media/index.js";
import type { StudioConnection } from "../../Studio/index.js";
import type { StaffConnection } from "../../Staff/index.js";

export type Favourites = {
  anime: MediaConnection;
  characters: CharacterConnection;
  manga: MediaConnection;
  staff: StaffConnection;
  studios: StudioConnection;
};
