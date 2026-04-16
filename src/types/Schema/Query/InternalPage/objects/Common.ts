import type { SubmissionStatus } from "../index.js";
import type { User } from "../../User/index.js";

export type Common = {
  assignee: User;
  createdAt: number;
  id: number;
  locked: boolean;
  notes: string;
  source: string;
  status: SubmissionStatus;
  submitter: User;
};
