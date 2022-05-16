const useDebug = (enabled, location) => [
  (...args) => {
    if (enabled) {
      if (location) {
        console.log(location, ...args);
      } else {
        console.log(...args);
      }
    }
  },
  (...args) => {
    if (enabled) {
      if (location) {
        console.error(location, ...args);
      } else {
        console.error(...args);
      }
    }
  },
];

export { useDebug };
