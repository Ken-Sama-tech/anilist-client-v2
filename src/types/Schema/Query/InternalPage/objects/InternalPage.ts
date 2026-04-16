import type {
  ActivityUnion,
  NotificationUnion,
} from "../../../Unions/index.js";
import type { AiringSchedule } from "../../AiringSchedule/index.js";
import type { Character } from "../../Character/index.js";
import type { Media } from "../../Media/index.js";
import type { PageInfo } from "../../Page/index.js";
import type { User } from "../../User/index.js";
import type {
  CharacterSubmission,
  StaffSubmission,
  MediaSubmission,
  Report,
  RevisionHistory,
} from "../index.js";
import type { MediaTrend } from "../../MediaTrend/index.js";
import type { MediaList } from "../../MediaList/index.js";
import type { ModAction } from "../../Mod/index.js";
import type { Recommendation } from "../../Recommendation/index.js";
import type { Review } from "../../Review/index.js";
import type { Studio } from "../../Studio/index.js";
import type { Staff } from "../../Staff/index.js";
import type { ThreadComment } from "../../ThreadComment/index.js";
import type { Thread } from "../../Thread/index.js";

export type InternalPage = {
  activities: ActivityUnion[];
  airingSchedules: AiringSchedule[];
  characterSubmissions: CharacterSubmission[];
  characters: Character[];
  followers: User[];
  following: User[];
  likes: User[];
  media: Media[];
  mediaList: MediaList[];
  mediaSubmissions: MediaSubmission[];
  mediaTrends: MediaTrend[];
  modActions: ModAction[];
  notifications: NotificationUnion[];
  pageInfo: PageInfo;
  recommendations: Recommendation[];
  reports: Report[];
  reviews: Review[];
  revisionHistory: RevisionHistory[];
  staff: Staff[];
  staffSubmissions: StaffSubmission[];
  studios: Studio[];
  threadComments: ThreadComment[];
  threads: Thread[];
  userBlockSearch: User[];
  users: User[];
};
