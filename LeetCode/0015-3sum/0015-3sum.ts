function threeSum(nums: number[]): number[][] {
    const result: number[][] = [];
    const uniqueTriplets = new Set<string>();

    nums.sort((a, b) => a - b); // Sort the array in ascending order

    for (let i = 0; i < nums.length - 2; i++) {
        if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
            let left = i + 1;
            let right = nums.length - 1;
            const target = -nums[i];

            while (left < right) {
                const sum = nums[left] + nums[right];

                if (sum === target) {
                    const triplet = [nums[i], nums[left], nums[right]].sort();
                    const tripletKey = triplet.join(',');

                    if (!uniqueTriplets.has(tripletKey)) {
                        result.push(triplet);
                        uniqueTriplets.add(tripletKey);
                    }

                    while (left < right && nums[left] === nums[left + 1]) left++;
                    while (left < right && nums[right] === nums[right - 1]) right--;

                    left++;
                    right--;
                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }

    return result;
}