import type { Media } from "../../Media/index.js";

type AiringScheduleKeys =
  | "airingAt"
  | "episode"
  | "id"
  | "mediaId"
  | "timeUntilAiring";

export type AiringSchedule = Record<AiringScheduleKeys, number> & {
  media: Omit<Media, "airingSchedule">;
};
