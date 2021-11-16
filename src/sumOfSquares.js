'use strict';
import { sum } from 'sum.js';
import { square } from './square';

export function sumOfSquares(x, y) {
    return sum(square(x), square(y));
}