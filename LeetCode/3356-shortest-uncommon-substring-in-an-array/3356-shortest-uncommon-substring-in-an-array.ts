function getAllSubStrings(str: string): string[] {
  let i, j, result = [];
  for (i = 0; i < str.length; i++) {
      for (j = i + 1; j < str.length + 1; j++) {
          result.push(str.slice(i, j));
      }
  }
  return result;
}

function onlyUnique(value: string, index: number, array: string[]) {
  return array.indexOf(value) === index;
}

function shortestSubstrings(arr: string[]): string[] {
    const map = new Map<string, number[]>();
    const a: string[][] = [];
    for (let i = 0; i < arr.length; i++) {
        let substrings = getAllSubStrings(arr[i]).sort((a, b) => {
          if(a.length < b.length)
            return -1;
          if(a.length > b.length)
            return 1;
          return a.localeCompare(b);
        });
        substrings = substrings.filter(onlyUnique);
        substrings.forEach(sub => map.has(sub) ? map.get(sub)!.push(i) : map.set(sub, [i]));
        a.push(substrings);
    }
    return a.map((substrings, i) => {
        let result = '';
        for (let j = 0; j < substrings.length; j++) {
            const sub = substrings[j];
            const indexes = map.get(sub)!;
            if (indexes.length === 1 && indexes[0] === i) {
                result = sub;
                break;
            }
            if (indexes.length > 0) {
                continue;
            }
        }
        return result;
    });
};