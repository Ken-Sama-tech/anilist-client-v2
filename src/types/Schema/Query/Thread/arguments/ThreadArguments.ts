import type { ThreadSort } from "../index.js";

export type ThreadArguments = {
  id: number;
  userId: number;
  replyUserId: number;
  subscribed: boolean;
  categoryId: number;
  mediaCategoryId: number;
  search: string;
  id_in: number[];
  sort: ThreadSort[];
};
