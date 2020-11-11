export function numJewelsInStones(J: string, S: string): number {
  let total = 0;

  S.split('').forEach(item => {
    if (J.indexOf(item) >= 0) {
      total++;
    }
  });

  return total;
};
