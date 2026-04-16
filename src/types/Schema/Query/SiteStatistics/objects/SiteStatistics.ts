import type { SiteTrendConnection } from "./SiteTrendConnection.js";

type SiteStatisticsKeys =
  | "anime"
  | "characters"
  | "manga"
  | "reviews"
  | "staff"
  | "studios"
  | "users";

export type SiteStatistics = Record<SiteStatisticsKeys, SiteTrendConnection>;
