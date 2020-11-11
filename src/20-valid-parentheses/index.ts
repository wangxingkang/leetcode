/**
 * 主要使用栈的概念，遇到左括号入栈，遇到右括号出栈
 * @param s
 */
export function isValid(s: string): boolean {
  // 提前判断长度的例外
  if (s.length % 2 !== 0) return false;
  const config = {
    '(': ')',
    '{': '}',
    '[': ']'
  };
  const arr = s.split('');
  const stack: string[] = ['?'];

  for (let i = 0; i < arr.length; i ++) {
    const item: string = arr[i];
    // 左括号入栈
    if (item in config) {
      stack.push(item);
    } else if (item !== config[stack.pop()]) {
      return false;
    }
  }

  return stack.length === 1;
};

// 不使用map
export function isValid1(s: string): boolean {
  // 提前判断长度的例外
  if (s.length % 2 !== 0) return false;
  const arr = s.split('');
  const stack: string[] = [];

  /**
   * 遇到左括号，对应的右括号入栈；
   * 遇到右括号出栈，判断栈是否为空，且出栈的是否匹配
   */
  for (let i = 0; i < arr.length; i ++) {
    const item: string = arr[i];
    if (item === '(') {
      stack.push(')');
    } else if (item === '{') {
      stack.push('}')
    } else if (item === '[') {
      stack.push(']')
    } else if (stack.length === 0  || item !== stack.pop()) {
      return false;
    }
  }

  return stack.length === 0;
};
