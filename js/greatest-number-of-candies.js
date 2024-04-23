function greatestNumberOfCandies(candies, extraCandies) {
  const result = [];
  for (let i = 0; i < candies.length; i++) {
    const max = Math.max(...candies);
    if (candies[i] + extraCandies >= max) {
      result.push(true);
    } else {
      result.push(false);
    }
  }
  return result;
}
