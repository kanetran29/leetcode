function convert(s: string, rows: number): string {
    if(rows === 1)
        return s;
    let result = '';
    for(let row = 0; row < rows; row++)
    {
        let index = row;
        const stepUp = row << 1;
        const stepDown = (rows << 1) - stepUp - 2;
        const total = stepUp + stepDown;

        while(index < s.length) {
            result += s[index];
            if(row === rows - 1)
                index += total
            else if(index % total === row)
                index += stepDown;
            else
                index += stepUp;
        }
    }
    return result;
};