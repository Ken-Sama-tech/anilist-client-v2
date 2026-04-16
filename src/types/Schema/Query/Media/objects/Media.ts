import type { CountryCode, FuzzyDate } from "../../../Scalars/index.js";
import type { CharacterConnection } from "../../Character/index.js";
import type { MediaList } from "../../MediaList/index.js";
import type { StudioConnection } from "../../Studio/index.js";
import type {
  AiringSchedule,
  AiringScheduleConnection,
} from "../../AiringSchedule/index.js";
import type { StaffConnection } from "../../Staff/index.js";
import type {
  MediaRelation,
  MediaSeason,
  MediaSource,
  MediaStatus,
  MediaFormat,
  MediaCoverImage,
  MediaExternalLink,
  MediaRank,
  MediaStats,
  MediaStreamingEpisode,
  MediaTag,
  MediaTitle,
  MediaTrailer,
  MediaType,
} from "../index.js";
import type { MediaTrendConnection } from "../../MediaTrend/index.js";
import type { RecommendationConnection } from "../../Recommendation/index.js";
import type { ReviewConnection } from "../../Review/index.js";

export type Media = {
  airingSchedule: AiringScheduleConnection;
  autoCreateForumThread: boolean;
  averageScore: number;
  bannerImage: string;
  chapters: number;
  characters: CharacterConnection;
  countryOfOrigin: CountryCode;
  coverImage: MediaCoverImage;
  description: string;
  duration: number;
  endDate: FuzzyDate;
  episodes: number;
  externalLinks: MediaExternalLink[];
  favourites: number;
  format: MediaFormat;
  genres: string[];
  hashtag: string;
  id: number;
  idMal: number;
  isAdult: boolean;
  isFavourite: boolean;
  isFavouriteBlocked: boolean;
  isLicensed: boolean;
  isLocked: boolean;
  isRecommendationBlocked: boolean;
  isReviewBlocked: boolean;
  meanScore: number;
  mediaListEntry: MediaList;
  modNotes: string;
  nextAiringEpisode: AiringSchedule;
  popularity: number;
  rankings: MediaRank[];
  recommendations: RecommendationConnection;
  relations: MediaRelation;
  reviews: ReviewConnection;
  season: MediaSeason;
  /**
   * @deprecated Anilist didn't state the reason, I'm not sure either better use "seasonYear" field instead
   */
  seasonInt: number;
  seasonYear: number;
  siteUrl: string;
  source: MediaSource;
  staff: StaffConnection;
  startDate: FuzzyDate;
  stats: MediaStats;
  status: MediaStatus;
  streamingEpisodes: MediaStreamingEpisode[];
  studios: StudioConnection;
  synonyms: string[];
  tags: MediaTag[];
  title: MediaTitle;
  trailer: MediaTrailer;
  trending: number;
  trends: MediaTrendConnection;
  type: MediaType;
};
