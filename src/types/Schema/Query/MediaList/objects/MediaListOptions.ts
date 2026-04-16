import type { JSONArr } from "../../../Scalars/index.js";
import type { ScoreFormat } from "../enums/ScoreFormat.js";
import type { MediaListTypeOptions } from "./MediaListTypeOptions.js";

export type MediaListOptions = {
  animeList: MediaListTypeOptions;
  mangaList: MediaListTypeOptions;
  rowOrder: string;
  scoreFormat: ScoreFormat;
  /**@deprecated reason: No longer used */
  sharedTheme: JSONArr;
  /**@deprecated reason: No longer used */
  sharedThemeEnabled: boolean;
  /**@deprecated reason: No longer used */
  useLegacyLists: boolean;
};
