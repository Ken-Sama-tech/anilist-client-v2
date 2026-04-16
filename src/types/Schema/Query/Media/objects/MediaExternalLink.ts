import type { ExternalLinkType } from "../../ExternalLinkSourceCollection/index.js";

export type MediaExternalLink = {
  color: string;
  icon: string;
  id: number;
  isDisabled: boolean;
  language: string;
  notes: string;
  site: string;
  siteId: number;
  type: ExternalLinkType;
  url: string;
};
