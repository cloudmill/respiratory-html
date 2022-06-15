export const inOutQuint = (x) =>
  x < 0.5 ? 16 * x * x * x * x * x : 1 - Math.pow(-2 * x + 2, 5) / 2;

export const outCubic = (x) => 1 - Math.pow(1 - x, 3);

export const linear = (x) => x;
