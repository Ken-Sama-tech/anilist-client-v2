import type { FuzzyDate } from "../../../Scalars/index.js";
import type { CharacterConnection } from "../../Character/index.js";
import type { MediaConnection } from "../../Media/index.js";
import type { StaffLanguage, StaffImage, StaffName } from "../index.js";

export type Staff = {
  age: number;
  bloodType: string;
  characterMedia: MediaConnection;
  characters: CharacterConnection;
  dateOfBirth: FuzzyDate;
  dateOfDeath: FuzzyDate;
  description: string;
  favourites: number;
  gender: string;
  homeTown: string;
  id: number;
  image: StaffImage;
  isFavourite: boolean;
  isFavouriteBlocked: boolean;
  language: StaffLanguage;
  languageV2: string;
  modNotes: string;
  name: StaffName;
  primaryOccupations: string[];
  siteUrl: string;
  staff: Staff;
  staffMedia: MediaConnection;
};
