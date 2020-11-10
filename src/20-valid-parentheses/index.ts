export function isValid(s: string): boolean {
  const config = {
    '(': ')',
    '{': '}',
    '[': ']'
  };
  const arr = s.split('');
  const stack: string[] = [];

  for (let i = 0; i < arr.length; i ++) {
    const item: string = arr[i];
    // 左括号入栈
    if (Object.keys(config).includes(item)) {
      stack.push(item);
    } else {
      // 判断栈是否为空
      if (!stack.length) return false;
      const latest = stack[stack.length - 1];
      // 匹配则出栈
      if (item === config[latest]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
};
