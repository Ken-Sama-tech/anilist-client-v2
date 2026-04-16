import type { JSONArr } from "../../../Scalars/index.js";

export type MediaListTypeOptions = {
  advancedScoring: string[];
  advancedScoringEnabled: boolean;
  customLists: string[];
  sectionOrder: string[];
  splitCompletedSectionByFormat: boolean;
  /**@deprecated reason: This field has not yet been fully implemented and may change without warning */
  theme: JSONArr;
};
