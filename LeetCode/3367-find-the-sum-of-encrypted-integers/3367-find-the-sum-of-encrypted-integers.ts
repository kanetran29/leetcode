function sumOfEncryptedInt(nums: number[]): number {
    return nums.reduce((acc, num) => acc + transformToMaxDigits(num), 0);
};

function transformToMaxDigits(num: number): number {
    let max = 0;
    let multiplier = 0;
    while(num > 0) {
        max = Math.max(max, num % 10);
        num = Math.floor(num / 10);
        multiplier = multiplier * 10 + 1;
    }
    return max * multiplier;
}