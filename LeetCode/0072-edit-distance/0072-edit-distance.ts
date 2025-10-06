function minDistance(word1: string, word2: string): number {
    const n = word1.length;
    const m = word2.length;
    const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(-1));
    
    const rec = (i: number, j: number): number => {
        if (dp[i][j] >= 0) return dp[i][j];
        if (i === 0 || j === 0) return dp[i][j] = i || j;
        if (word1[i - 1] === word2[j - 1]) return dp[i][j] = rec(i - 1, j - 1);
        return dp[i][j] = 1 + Math.min(rec(i, j - 1), rec(i - 1, j), rec(i - 1, j - 1));
    }
    
    return rec(n, m);
}