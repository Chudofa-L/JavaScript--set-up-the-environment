import { sum } from './sum';

describe('sum', () => {
  it('return sum of two numbers', () => {
    expect(sum(3, 2)).toEqual(5);
  });
});
