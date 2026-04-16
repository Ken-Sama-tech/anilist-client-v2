import type { MediaType } from "../../Media/index.js";
import type { MediaListSort, MediaListStatus } from "../index.js";
import type { FuzzyDateInt } from "../../../Scalars/index.js";

export type MediaListArguments = {
  id: number;
  userId: number;
  userName: string;
  type: MediaType;
  status: MediaListStatus;
  mediaId: number;
  isFollowing: boolean;
  notes: string;

  /**
   * 8 digit long date integer (YYYYMMDD).
   * Unknown dates represented by "0".
   * E.g. 2016: "20160000", May 1976: "19760500"
   * */
  startedAt: FuzzyDateInt;

  /**
   * 8 digit long date integer (YYYYMMDD).
   * Unknown dates represented by "0".
   * E.g. 2016: "20160000", May 1976: "19760500"
   * */
  completedAt: FuzzyDateInt;
  compareWithAuthList: boolean;
  userId_in: number[];
  status_in: MediaListStatus[];
  status_not_in: MediaListStatus[];
  status_not: MediaListStatus;
  mediaId_in: number[];
  mediaId_not_in: number[];
  notes_like: string;

  /**
   * 8 digit long date integer (YYYYMMDD).
   * Unknown dates represented by "0".
   * E.g. 2016: "20160000", May 1976: "19760500"
   * */
  startedAt_greater: FuzzyDateInt;

  /**
   * 8 digit long date integer (YYYYMMDD).
   * Unknown dates represented by "0".
   * E.g. 2016: "20160000", May 1976: "19760500"
   * */
  startedAt_lesser: FuzzyDateInt;
  startedAt_like: string;

  /**
   * 8 digit long date integer (YYYYMMDD).
   * Unknown dates represented by "0".
   * E.g. 2016: "20160000", May 1976: "19760500"
   * */
  completedAt_greater: FuzzyDateInt;

  /**
   * 8 digit long date integer (YYYYMMDD).
   * Unknown dates represented by "0".
   * E.g. 2016: "20160000", May 1976: "19760500"
   * */
  completedAt_lesser: FuzzyDateInt;
  completedAt_like: string;
  sort: MediaListSort[];
};
