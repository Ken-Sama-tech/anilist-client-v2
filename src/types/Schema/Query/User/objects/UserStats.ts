import type {
  FormatStats,
  GenreStats,
  ListScoreStats,
  ScoreDistribution,
  StaffStats,
  StudioStats,
  TagStats,
  UserActivityHistory,
  YearStats,
} from "../index.js";

export type UserStats = {
  activityHistory: UserActivityHistory[];
  animeListScores: ListScoreStats[];
  animeScoreDistribution: number[];
  animeStatusDistribution: number[];
  chaptersRead: number;
  favouredActors: StaffStats[];
  favouredFormats: FormatStats[];
  favouredGenres: GenreStats[];
  favouredGenresOverview: GenreStats[];
  favouredStaff: StaffStats[];
  favouredStudios: StudioStats[];
  favouredTags: TagStats[];
  favouredYears: YearStats[];
  mangaListScores: ListScoreStats[];
  mangaScoreDistribution: ScoreDistribution[];
  mangaStatusDistribution: ScoreDistribution[];
  watchedTime: number;
};
