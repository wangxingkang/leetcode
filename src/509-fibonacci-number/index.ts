// 自顶向下的解法
export function fib(N: number): number {
  if (N < 1) return 0;
  const list: number[] = [];

  function help(memo: number[], n: number): number {
    // base case
    if (n === 1 || n === 2) return 1;

    // 已计算
    if (memo[n] !== undefined) {
      return memo[n];
    }

    memo[n] = help(memo, n - 1) + help(memo, n - 2);

    return memo[n];
  }

  return help(list, N);
};

// 自底向上解法
export function fib1(N: number): number {
  if (N < 1) return 0;
  const list = [0];

  // base case
  list[1] = list[2] = 1;

  for (let i = 3; i <= N; i++) {
    list[i] = list[i - 1] + list[i - 2];
  }

  return list[N];
};

export function fib3(N: number): number {
  if (N < 1) return 0;
  if (N === 1 || N === 2) return 1;

  let prev = 1;
  let current = 1;

  for (let i = 3; i <= N; i++) {
    let num = prev + current;
    prev = current;
    current = num;
  }

  return current;
};

