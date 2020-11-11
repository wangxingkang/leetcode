import { isValid } from './';

describe('isValid()', () => {
  it('空字符串', () => {
    expect(isValid('')).toEqual(true);
  });

  it('闭合的左右括号不相同', () => {
    expect(isValid('(]')).toEqual(false);
    expect(isValid('(}')).toEqual(false);
    expect(isValid('{]')).toEqual(false);
  });

  it('右括号没有以正确顺序闭合。', () => {
    expect(isValid('())')).toEqual(false);
    expect(isValid('))((')).toEqual(false);
  });

  it('正确的', () => {
    expect(isValid('()')).toEqual(true);
    expect(isValid('()[]{}')).toEqual(true);
    expect(isValid('()[()]{}')).toEqual(true);
  });
});
