function maxBottlesDrunk(numBottles: number, numExchange: number): number {
    let total = numBottles;
    let empty = numBottles
    while(empty >= numExchange) {
        total++;
        empty -= numExchange - 1;
        numExchange++;
    }
    return total;
};