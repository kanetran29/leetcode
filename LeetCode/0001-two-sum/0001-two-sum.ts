function twoSum(nums: number[], target: number): number[] {
    let result: number[] = [];
    let map = new Map<number, number>();
    nums.forEach((value, index) => {
        let diff = target - value;
        if (map.has(diff)) {
            result = [index, map.get(diff)!];
            return;
        }
        map.set(value, index);
    });
    return result;
};