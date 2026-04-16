type Day =
  | "00"
  | "01"
  | "02"
  | "03"
  | "04"
  | "05"
  | "06"
  | "07"
  | "08"
  | "09"
  | "10"
  | "11"
  | "12"
  | "13"
  | "14"
  | "15"
  | "16"
  | "17"
  | "18"
  | "19"
  | "20"
  | "21"
  | "22"
  | "23"
  | "24"
  | "25"
  | "26"
  | "27"
  | "28"
  | "29"
  | "30"
  | "31";

type Month =
  | "00"
  | "01"
  | "02"
  | "03"
  | "04"
  | "05"
  | "06"
  | "07"
  | "08"
  | "09"
  | "10"
  | "11"
  | "12";

type Year = `${number}${number}${number}${number}`;

/**
 * 8 digit long date integer (YYYYMMDD).
 * Unknown dates represented by "0".
 * E.g. 2016: "20160000", May 1976: "19760500"
 */
export type FuzzyDateInt = "0" | `${Year}${Month}${Day}`;
