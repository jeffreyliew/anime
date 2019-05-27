export function determineOrder(order) {
  if (order === "ascending") {
    return (a, b) => a.score - b.score;
  } else if (order === "descending") {
    return (a, b) => b.score - a.score;
  }
}

export const DAY = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday"
];

export const URL = "https://api.jikan.moe/v3/schedule";
