function maximumLengthSubstring(s: string): number {
    let map = new Map();
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        let rightChar = s[right];
        map.set(rightChar, (map.get(rightChar) || 0) + 1);

        while (Array.from(map.values()).some(value => value > 2)) {
            let leftChar = s[left];
            map.set(leftChar, map.get(leftChar) - 1);
            if (map.get(leftChar) === 0) {
                map.delete(leftChar);
            }
            left++;
        }

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};