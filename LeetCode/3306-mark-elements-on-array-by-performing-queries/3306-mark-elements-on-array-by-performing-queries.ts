function unmarkedSumArray(nums: number[], queries: number[][]): number[] {
    let map = new Map<number, Set<number>>();
    let sum = 0;
    const result: number[] = [];
    nums.forEach((num, i) => {
        sum += num;
        if(!map.has(num)) {
            map.set(num, new Set());
        }
        map.get(num)!.add(i);
    });

    map = new Map([...map.entries()].sort((a, b) => a[0] - b[0]));

    queries.forEach(([index, marks]) => {
        const key = nums[index];
        const indexes = map.get(key)!;
        // Mark element at nums[index]
        if(indexes?.has(index)) {
            indexes.delete(index);
            if(indexes.size === 0) {
                map.delete(key);
            }
            sum -= key;
        }
        // Mark the `marks` elements with the smallest values
        while(marks > 0) {
            if(map.size === 0) {
                break;
            }
            const [smallest, indices] = map.entries().next().value;
            if(indices.size <= marks) {
                sum -= smallest * indices.size;
                map.delete(smallest);
                marks -= indices.size;
            }
            else {
                sum -= smallest * marks;
                while(marks > 0) {
                    indices.delete(indices.values().next().value);
                    marks--;
                }
            }
        }
        result.push(sum);
    });
    return result;
};