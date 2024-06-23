import * as day4 from './index.js';
const { partOne, partTwo } = day4;

import { expect } from 'chai';

describe('day 4 part 1', () => {
  it('Input gives correct answer', () => {
    const result = partOne();
    expect(result).to.equal(17782);
  });
});

describe('day 4 part 2', () => {
  it('Input gives correct answer', () => {
    const result = partTwo();
    expect(result).to.equal(8477787);
  });
});