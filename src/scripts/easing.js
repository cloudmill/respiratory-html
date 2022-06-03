const easeInOutQuint = (x) =>
  x < 0.5 ? 16 * x * x * x * x * x : 1 - Math.pow(-2 * x + 2, 5) / 2;

const easeOutCubic = (x) => 1 - Math.pow(1 - x, 3);

export { easeInOutQuint, easeOutCubic };
