import type {
  TextActivity,
  ListActivity,
  MessageActivity,
} from "../Query/Activity/index.js";

export type ActivityUnion = TextActivity | ListActivity | MessageActivity;
