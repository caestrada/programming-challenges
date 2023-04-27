export const maxValue = (nums: number[]): number => {
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (max >= nums[i]) continue;

    max = nums[i];
  }

  return max;
};
