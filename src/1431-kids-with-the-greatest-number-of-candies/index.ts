/**
 * 解题关键，主要是对每个孩子的糖多数量加上额外的糖果，是否会大于最多的糖果
 * @param candies
 * @param extraCandies
 */
export function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  const max = Math.max(...candies);

  return candies.map(item => item + extraCandies >= max);
};
