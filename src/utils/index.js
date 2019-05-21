export function determineOrder(orderState) {
  if (orderState === "ascending") {
    return (a, b) => a.score - b.score;
  } else if (orderState === "descending") {
    return (a, b) => b.score - a.score;
  }
}
