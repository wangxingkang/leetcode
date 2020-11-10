/**
 * 不修改 nums，推荐此写法
 * @param nums
 */
export function runningSum(nums: number[]): number[] {
  const result: number[] = [];
  result[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    result[i] = result[i - 1] + nums[i];
  }

  return result;
}

// 可以修改 nums
// export function runningSum(nums: number[]): number[] {
//   for (let i = 1; i < nums.length; i++ ){
//     nums[i] += nums[i - 1];
//   }
//   return nums;
// }
