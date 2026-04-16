import type { FuzzyDate } from "../../../Scalars/index.js";
import type { CharacterImage, CharacterName } from "../index.js";
import type { MediaConnection } from "../../Media/index.js";

export type Character = {
  age: number;
  bloodType: string;
  dateOfBirth: FuzzyDate;
  description: string;
  favourites: number;
  gender: string;
  id: number;
  image: CharacterImage;
  isFavourite: boolean;
  isFavouriteBlocked: boolean;
  media: MediaConnection;
  modNotes: string;
  name: CharacterName[];
  siteUrl: string;
  updatedAt: number;
};
