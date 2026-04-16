import type { Staff } from "../../Staff/index.js";
import type { Common } from "./Common.js";

export type StaffSubmission = Common & {
  submission: Staff;
  staff: Staff;
};
