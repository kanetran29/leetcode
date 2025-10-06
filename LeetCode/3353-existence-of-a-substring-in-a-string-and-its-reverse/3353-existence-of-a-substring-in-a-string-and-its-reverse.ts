function isSubstringPresent(s: string): boolean {
    for (let i = 0; i < s.length - 1; i++) {
        const substring = s.substring(i, i + 2);
        const reversedSubstring = substring.split('').reverse().join('');
        if (s.includes(reversedSubstring)) {
            return true;
        }
    }
    return false;
}