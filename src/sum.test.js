import { sum } from './sum';

describe('sum', () => {
  it('return sum of two numbers', () => {
    expect(sum(2, 3)).toEqual(5);
  });
});
