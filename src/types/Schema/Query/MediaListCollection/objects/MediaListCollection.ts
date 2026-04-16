import type { MediaList, MediaListGroup } from "../../MediaList/index.js";
import type { User } from "../../User/index.js";

export type MediaListCollection = {
  /**@deprecated (reason: Not GraphQL spec compliant, use lists field instead.)*/
  customLists: MediaList[][];
  hasNextChunk: boolean;
  lists: MediaListGroup[];
  /**@deprecated(reason: Not GraphQL spec compliant, use lists field instead.)*/
  statusLists: MediaList[][];
  user: User;
};
