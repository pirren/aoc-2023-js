import * as day7 from './index.js';
const { partOne, partTwo } = day7;

import { expect } from 'chai';

describe('day 7 part 1', () => {
  it('Input gives correct answer', () => {
    const result = partOne();
    // expect(result).to.be.an("array").that.is.empty;
    expect(result).to.equal(251058093);
  });
});

describe('day 7 part 2', () => {
  it('Input gives correct answer', () => {
    const result = partTwo();
    // expect(result).to.be.an("array").that.is.empty;
    expect(result).to.equal(249781879);
  });
});