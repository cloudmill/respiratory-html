const useDebug = (enadled, location) => [
  (...args) =>
    enadled &&
    ((location && console.log(location, ...args)) || console.log(...args)),
  (...args) =>
    enadled &&
    ((location && console.error(location, ...args)) || console.error(...args)),
];

export { useDebug };
