import type { JSONArr } from "../../../Scalars/index.js";
import type { MediaListOptions } from "../../MediaList/index.js";
import type { ModRole } from "../../Mod/index.js";
import type {
  Favourites,
  UserAvatar,
  UserOptions,
  UserPreviousName,
  UserStatisticTypes,
  UserStats,
} from "../index.js";

export type User = {
  about: string;
  avatar: UserAvatar;
  bannerImage: string;
  bans: JSONArr;
  createdAt: number;
  donatorBadge: string;
  donatorTier: number;
  favourites: Favourites;
  id: number;
  isBlocked: boolean;
  isFollower: boolean;
  isFollowing: boolean;
  mediaListOptions: MediaListOptions;
  moderatorRoles: ModRole[];
  moderatorStatus: string;
  name: string;
  options: UserOptions;
  previousNames: UserPreviousName[];
  siteUrl: string;
  statistics: UserStatisticTypes;
  /**@deprecated reason: Deprecated. Replaced with statistics field. */
  stats: UserStats;
  unreadNotificationCount: number;
  updatedAt: number;
};
