import { NumberSpiralGenerator } from '../src/NumberSpiralGenerator';

describe('NumberSpiralGenerator', () => {
    it('returns an empty array for a number < 1', () => {
        console.log(NumberSpiralGenerator(1));
        expect(NumberSpiralGenerator(0.1)).toEqual([]);
    });
});