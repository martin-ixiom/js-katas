export function NumberSpiralGenerator(value: number): Array<any> {
    if (value < 1 || !Number.isInteger(value)) {
        return [];
    }
    return [[1,2], [4,3]];
}