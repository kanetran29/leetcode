function maximumHappinessSum(happiness: number[], k: number): number {
    happiness.sort((a, b) => b - a);
    let sum = 0;
    for (let i = 0; i < k; i++) {
        let happinessValue = happiness[i] - i;
        
        if (happinessValue <= 0) {
            break;
        }

        sum += happinessValue;
    }
    return sum;
};