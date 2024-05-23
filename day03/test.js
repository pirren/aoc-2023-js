import * as day3 from './index.js';
const { partOne, partTwo } = day3;

import { expect } from 'chai';

describe('day 3 part 1', () => {
  it('Input gives correct answer', () => {
    const result = partOne();
    expect(result).to.equal(529618);
  });
});

describe('day 3 part 2', () => {
  it('Input gives correct answer', () => {
    const result = partTwo();
    expect(result).to.equal(77509019);
  });
});