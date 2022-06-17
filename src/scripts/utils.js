export const normIndex = (index, items) =>
  index < 0 ? items.length - 1 : index % items.length;

export const getTrio = (index, items) => ({
  prev: items[normIndex(index - 1, items)],
  current: items[normIndex(index, items)],
  next: items[normIndex(index + 1, items)],
});
