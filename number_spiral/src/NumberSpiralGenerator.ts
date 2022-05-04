interface pos { x: number; y: number};

export function NumberSpiralGenerator(value: any): Array<any> {
    if (value < 1 || !Number.isInteger(value)) {
        return [];
    }
    const spiral = Array(value).fill(null).map(() => Array(value));
    let total = 1;
    let top = 0;
    let right = value -1;
    let bottom = value -1;
    let left = 0;

    let direction = 'right';

    while(top <= bottom && left <= right && total <= 1000) {
        if (direction === 'right') {
            for(let col = left; col <= right; col++) {
                spiral[top][col] = total++;
            }
            ++top;
            direction = 'down';
        } else if (direction === 'down') {
            for(let row = top; row <= bottom; row++) {
                spiral[row][right] = total++;
            }
            --right;
            direction = 'left';
        } else if (direction === 'left') {
            for(let col = right; col >= left; col--) {
                spiral[bottom][col] = total++;
            }
            --bottom;
            direction = 'up';
        } else if (direction === 'up') {
            for(let row = bottom; row >= top; row--) {
                spiral[row][left] = total++;
            }
            ++left;
            direction = 'right';
        }
    }

    console.log(spiral);
    return spiral;
}

