import { runningSum } from './';

describe('runningSum()', () => {
  it('参数为长度为1的数组', () => {
    const result = runningSum([1]);
    expect(result).toEqual([1]);
  });

  it('参数为长度大于1的数组', () => {
    expect(runningSum([1, 1, 1, 1, 1])).toEqual([1, 2, 3, 4, 5]);
    expect(runningSum([3, 1, 2, 10, 1])).toEqual([3, 4, 6, 16, 17]);
  });
});
