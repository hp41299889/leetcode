//Runtime: 108 ms

function twoSum(nums: number[], target: number): number[] {
    const ans = [];
    nums.forEach((value, index) => {
        const diff = target - value;
        let count = index + 1;
        while (count < nums.length) {
            if (nums[count] == diff) {
                ans.push(index);
                ans.push(count);
            };
            count++;
        };
    });
    return ans;
};