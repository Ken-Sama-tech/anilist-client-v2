import type { User } from "../../User/index.js";

export type Report = {
  cleared: boolean;
  createdAt: number;
  id: number;
  reason: string;
  reported: User;
  reporter: User;
};
