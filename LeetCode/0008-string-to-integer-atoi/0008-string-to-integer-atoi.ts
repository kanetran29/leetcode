function myAtoi(s: string): number {
    let sign = 1;
    let i = 0;
    while(s[i] === ' ') {
        i++;
    }
    if(s[i] === '-' || s[i] === '+') {
        sign = s[i] === '-' ? -1 : 1;
        i++;
    }
    let result = 0;
    while(i < s.length) {
        let c = s.charCodeAt(i) - 48;
        if(c >= 0 && c <= 9)
            result = result * 10 + c;
        else
            break;
        i++;
    }

    if(sign === -1)
        result = -result;

    if(result < -2147483648)
        return -2147483648;

    if(result > 2147483647)
        return 2147483647;

    return result;
};