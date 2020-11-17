import { fib } from './';

describe('runningSum()', () => {
  it('N = 20', () => {
    expect(fib(20)).toEqual(6765);
  });

  it('N = 2', () => {
    expect(fib(2)).toEqual(1);
  });

  it('N = 0', () => {
    expect(fib(0)).toEqual(0);
  });
});
