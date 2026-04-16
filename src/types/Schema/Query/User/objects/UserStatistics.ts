import type {
  UserCountryStatistic,
  UserFormatStatistic,
  UserGenreStatistic,
  UserReleaseYearStatistic,
  UserScoreStatistic,
  UserStaffStatistic,
  UserStartYearStatistic,
  UserStatusStatistic,
  UserStudioStatistic,
  UserTagStatistic,
  UserVoiceActorStatistic,
} from "../index.js";
import type { UserLengthStatistic } from "./UserLengthStatistic.js";

export type UserStatistics = {
  chaptersRead: number;
  count: number;
  countries: UserCountryStatistic[];
  episodesWatched: number;
  formats: UserFormatStatistic[];
  genres: UserGenreStatistic[];
  lengths: UserLengthStatistic[];
  meanScore: number;
  minutesWatched: number;
  releaseYears: UserReleaseYearStatistic[];
  scores: UserScoreStatistic[];
  staff: UserStaffStatistic[];
  standardDeviation: number;
  startYears: UserStartYearStatistic[];
  statuses: UserStatusStatistic[];
  studios: UserStudioStatistic[];
  tags: UserTagStatistic[];
  voiceActors: UserVoiceActorStatistic[];
};
