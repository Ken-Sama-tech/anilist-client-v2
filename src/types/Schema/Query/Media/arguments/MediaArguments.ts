import type { CountryCode, FuzzyDateInt } from "../../../Scalars/index.js";
import type {
  MediaFormat,
  MediaSeason,
  MediaSort,
  MediaSource,
  MediaStatus,
  MediaType,
} from "../index.js";

export type MediaArguments = {
  id: number;
  idMal: number;
  startDate: FuzzyDateInt;
  endDate: FuzzyDateInt;
  season: MediaSeason;
  seasonYear: number;
  type: MediaType;
  format: MediaFormat;
  status: MediaStatus;
  episodes: number;
  duration: number;
  chapters: number;
  volumes: number;
  isAdult: boolean;
  genre: string;
  tag: string;
  minimumTagRank: number;
  tagCategory: string;
  onList: boolean;
  licensedBy: string;
  licensedById: number;
  averageScore: number;
  popularity: number;
  source: MediaSource;
  countryOfOrigin: CountryCode;
  isLicensed: boolean;
  search: string;
  id_not: number;
  id_in: number[];
  id_not_in: number[];
  idMal_not: number;
  idMal_in: number[];
  idMal_not_in: number[];

  /**
   * 8 digit long date integer (YYYYMMDD).
   * Unknown dates represented by "0".
   * E.g. 2016: "20160000", May 1976: "19760500"
   */
  startDate_greater: FuzzyDateInt;

  /**
   * 8 digit long date integer (YYYYMMDD).
   * Unknown dates represented by "0".
   * E.g. 2016: "20160000", May 1976: "19760500"
   */
  startDate_lesser: FuzzyDateInt;
  startDate_like: string;

  /**
   * 8 digit long date integer (YYYYMMDD).
   * Unknown dates represented by "0".
   * E.g. 2016: "20160000", May 1976: "19760500"
   */
  endDate_greater: FuzzyDateInt;

  /**
   * 8 digit long date integer (YYYYMMDD).
   * Unknown dates represented by "0".
   * E.g. 2016: "20160000", May 1976: "19760500"
   */
  endDate_lesser: FuzzyDateInt;
  endDate_like: string;
  format_in: MediaFormat[];
  format_not: MediaFormat;
  format_not_in: MediaFormat[];
  status_in: MediaStatus[];
  status_not: MediaStatus;
  status_not_in: MediaStatus[];
  episodes_greater: number;
  episodes_lesser: number;
  duration_greater: number;
  duration_lesser: number;
  chapters_greater: number;
  chapters_lesser: number;
  volumes_greater: number;
  volumes_lesser: number;
  genre_in: string[];
  genre_not_in: string[];
  tag_in: string[];
  tag_not_in: string[];
  tagCategory_in: string[];
  tagCategory_not_in: string[];
  licensedBy_in: string[];
  licensedById_in: number[];
  averageScore_not: number;
  averageScore_greater: number;
  averageScore_lesser: number;
  popularity_not: number;
  popularity_greater: number;
  popularity_lesser: number;
  source_in: MediaSource[];
  sort: MediaSort[];
};
