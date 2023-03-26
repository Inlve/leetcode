/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  const map: Map<number, number> = new Map();
  for (let i = 0, len = nums.length; i < len; i += 1) {
    const value = nums[i];
    const diff = target - value;
    if (map.has(diff)) {
      return [i, map.get(diff)!];
    }
    map.set(value, i);
  }
  return [];
}
// @lc code=end
