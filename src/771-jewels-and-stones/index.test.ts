import { numJewelsInStones } from './';

describe('runningSum()', () => {
  it('简单', () => {
    expect(numJewelsInStones('aA', 'aAAbbbb')).toEqual(3);
  });

  it('大小写', () => {
    expect(numJewelsInStones('z', 'ZZ')).toEqual(0);
  });
});
