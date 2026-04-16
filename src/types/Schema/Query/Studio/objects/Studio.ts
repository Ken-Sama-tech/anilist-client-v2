import type { MediaConnection } from "../../Media/index.js";

export type Studio = {
  favourites: number;
  id: number;
  isAnimationStudio: boolean;
  isFavourite: boolean;
  media: MediaConnection;
};
