function countSubstrings(s: string, c: string): number {
    let count = 0;
    for(const char of s) {
        if(char === c) {
            count++;
        }
    }
    // count substring start and end with c
    return count * (count + 1) / 2;
}