import type { ExternalLinkMediaType, ExternalLinkType } from "../index.js";

export type ExternalLinkSourceCollectionArguments = {
  id: number;
  type: ExternalLinkType;
  mediaType: ExternalLinkMediaType;
};
