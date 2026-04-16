import type { Media } from "../../Media/index.js";
import type { Common } from "./Common.js";

export type RelatedMediaAdditionNotification = Omit<
  Common,
  "activity" | "activityId" | "user" | "userId"
> & {
  media: Media;
  mediaId: number;
};
