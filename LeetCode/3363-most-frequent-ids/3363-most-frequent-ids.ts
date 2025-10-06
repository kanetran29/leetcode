function mostFrequentIDs(nums: number[], freq: number[]): number[] {
    const map = new Map<number, number>();
    const result: number[] = [];
    let max = 0;
    let preVal: number = nums[0];
    for (let i = 0; i < nums.length; i++) {
        const f = (map.get(nums[i]) || 0) + freq[i];
        map.set(nums[i], f);
        // Only need to take care of the negative freq that is added to the current max
        if (freq[i] < 0 && preVal === nums[i]) {
            [max, preVal] = findMaxValueAndIndex(map);
        } else if (f > max) {
            [max, preVal] = [f, nums[i]];
        }
        result.push(max);
    }
    return result;
};

function findMaxValueAndIndex(map: Map<number, number>): [number, number] {
    let pair: [number, number] = [0 , 0]
    for (const [key, value] of map) {
        if (value > pair[0]) {
            pair = [value, key];
        }
    }
    return pair;
}