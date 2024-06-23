import * as day1 from './index.js';
const { partOne, partTwo } = day1;

import { expect } from 'chai';

describe('day 1 part 1', () => {
  it('Input gives correct answer', () => {
    const result = partOne();
    expect(result).to.equal(55029);
  });
});

describe('day 1 part 2', () => {
  it('Input gives correct answer', () => {
    const result = partTwo();
    expect(result).to.equal(55686);
  });
});