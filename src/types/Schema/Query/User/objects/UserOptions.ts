import type { ListActivityOption } from "../../Activity/index.js";
import type {
  NotificationOption,
  UserStaffNameLanguage,
  UserTitleLanguage,
} from "../index.js";

export type UserOptions = {
  activityMergeTime: number;
  airingNotifications: boolean;
  disabledListActivity: ListActivityOption[];
  displayAdultContent: boolean;
  notificationOptions: NotificationOption[];
  profileColor: string;
  restrictMessagesToFollowing: boolean;
  staffNameLanguage: UserStaffNameLanguage;
  timezone: string;
  titleLanguage: UserTitleLanguage;
};
