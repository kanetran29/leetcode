function minOperations(k: number): number {
    // Assume that there will be X of first operation and Y of second operation => min(X + Y) = ?
    // -> sum = X + 1 + (X + 1) * Y >= k
    // -> (X + 1)(Y + 1) >= k
    // -> A = X + 1, B = Y + 1 => A * B >= k
    // -> min(X + Y) = min(A + B) - 2 (because we have X + Y = A + B - 2, X >= 0, Y >= 0)
    // -> A + B >= 2 * sqrt(k) (Cauchy-Schwarz inequality)
    // -> min(X + Y) = 2 * sqrt(k) - 2
    return Math.ceil(2 * Math.sqrt(k)) - 2;
};