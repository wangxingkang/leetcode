import { kidsWithCandies } from './';

describe('kidsWithCandies()', () => {
  it('存在多个孩子拥有最多糖果', () => {
    expect(kidsWithCandies([2,3,5,1,3], 3)).toEqual([true,true,true,false,true]);
    expect(kidsWithCandies([12,1,12], 10)).toEqual([true,false,true]);
  });

  it('只存在1个孩子拥有最多糖果', () => {
    expect(kidsWithCandies([4,2,1,1,2], 1)).toEqual([true,false,false,false,false]);
  });
});
