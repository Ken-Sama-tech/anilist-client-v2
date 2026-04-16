import type { JSONObj } from "../../../Scalars/index.js";
import type { Character } from "../../Character/index.js";
import type { Media, MediaExternalLink } from "../../Media/index.js";
import type { Staff } from "../../Staff/index.js";
import type { Studio } from "../../Studio/index.js";
import type { User } from "../../User/index.js";
import type { RevisionHistoryAction } from "../index.js";

export type RevisionHistory = {
  action: RevisionHistoryAction;
  changes: JSONObj;
  character: Character;
  createdAt: number;
  externalLink: MediaExternalLink;
  id: number;
  media: Media;
  staff: Staff;
  studio: Studio;
  user: User;
};
