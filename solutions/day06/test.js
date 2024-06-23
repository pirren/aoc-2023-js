import * as day6 from './index.js';
const { partOne, partTwo } = day6;

import { expect } from 'chai';

describe('day 6 part 1', () => {
  it('Input gives correct answer', () => {
    const result = partOne();
    expect(result).to.equal(741000);
  });
});

describe('day 6 part 2', () => {
  it('Input gives correct answer', () => {
    const result = partTwo();
    expect(result).to.equal(38220708);
  });
});