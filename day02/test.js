import * as day2 from './index.js';
const { partOne, partTwo } = day2;

import { expect } from 'chai';

describe('day 2 part 1', () => {
  it('Input gives correct answer', () => {
    const result = partOne();
    expect(result).to.equal(2105);
  });
});

describe('day 2 part 2', () => {
  it('Input gives correct answer', () => {
    const result = partTwo();
    expect(result).to.equal(72422);
  });
});