import type { FuzzyDate, JSONArr, JSONObj } from "../../../Scalars/index.js";
import type { Media } from "../../Media/index.js";
import type { User } from "../../User/index.js";
import type { MediaListStatus } from "../index.js";

export type MediaList = {
  advancedScores: JSONObj;
  completedAt: FuzzyDate;
  createdAt: number;
  customLists: JSONArr;
  hiddenFromStatusLists: boolean;
  id: number;
  media: Omit<Media, "mediaListEntry">;
  mediaId: number;
  notes: string;
  priority: number;
  private: boolean;
  progress: number;
  progressVolumes: number;
  repeat: number;
  score: number;
  startedAt: FuzzyDate;
  status: MediaListStatus;
  updatedAt: number;
  user: User;
  userId: number;
};
