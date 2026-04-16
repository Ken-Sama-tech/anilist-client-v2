import type { Media } from "../../Media/objects/Media.js";

export type MediaTrend = {
  averageScore: number;
  date: number;
  episode: number;
  inProgress: number;
  media: Omit<Media, "trends">;
  mediaId: number;
  popularity: number;
  releasing: boolean;
  trending: number;
};
