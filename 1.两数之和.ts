/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
    if (nums.length <= 2) return [0, 1];
    const map: Record<string, number> = {
        [nums[0]]: 0,
    };
    for (let i = 1; i < nums.length; i += 1) {
        const d = target - nums[i];
        if (map[d] !== undefined) {
            return [map[d], i];
        }
        map[nums[i]] = i;
    }
    return [];
  }
// @lc code=end

