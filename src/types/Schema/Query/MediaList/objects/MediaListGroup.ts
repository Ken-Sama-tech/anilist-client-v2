import type { MediaList, MediaListStatus } from "../index.js";

export type MediaListGroup = {
  entries: MediaList[];
  isCustomList: boolean;
  isSplitCompletedList: boolean;
  name: string;
  status: MediaListStatus;
};
