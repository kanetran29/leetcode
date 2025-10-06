function longestPalindrome(s: string): string {
    let l = 0, r = 1;
    
    for(let i = 1; i < s.length; i++)
    {
        /** Assume that the longest palindrome is end at i and its length is N
         * 1. N = maxSoFar + 1 if isPalindrome(s[i - maxSoFar - 1, i])
         * 2. N = maxSoFar + 2 if isPalindrome(s[i - maxSoFar - 2, i])
        */
        const maxSoFar = r - l;
        
        if(i - 1 - maxSoFar >= 0 && s[i] === s[i - maxSoFar - 1] && isPalindrome(s, i - maxSoFar - 1, i + 1))
        {
            l = i - maxSoFar - 1;
            r = i + 1;
            continue;
        }

        if(s[i] === s[i - maxSoFar] && isPalindrome(s, i - maxSoFar, i + 1))
        {
            l = i - maxSoFar;
            r = i + 1;
        }
    }
    return s.substring(l, r);
};

function isPalindrome(s: string, l: number, r: number): boolean {
    for(let i = 0; i < (r - l) / 2; i++)
    {
        if(s[l + i] !== s[r - i - 1])
        {
            return false;
        }
    }
    return true;
}
