import { NumberSpiralGenerator } from '../src/NumberSpiralGenerator';

describe('NumberSpiralGenerator', () => {
    it('returns an empty array for a number < 1', () => {
        expect(NumberSpiralGenerator(0.1)).toEqual([]);
    });

    it('returns an empty array for a non number < 1', () => {
        expect(NumberSpiralGenerator('Foo')).toEqual([]);
    });

    it('returns a number spiral for 2', () => {
        expect(NumberSpiralGenerator(2)).toEqual([[1,2],[4,3]]);
    });

    it('returns a number spiral for 3', () => {
        expect(NumberSpiralGenerator(3)).toEqual([[1,2,3],[8,9,4],[7,6,5]]);
    });
});