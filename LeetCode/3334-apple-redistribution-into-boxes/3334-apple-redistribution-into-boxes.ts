function minimumBoxes(apple: number[], capacity: number[]): number {
    let apples = apple.reduce((a, b) => a + b, 0);
    let boxes = 0;
    capacity.sort((a, b) => b- a);
    capacity.forEach((c) => {
        if (apples <= 0) return;

        if (apples <= c) {
            boxes ++;
            apples = 0;
        } else {
            boxes ++;
            apples -= c;
        }
    });
    return boxes;
};