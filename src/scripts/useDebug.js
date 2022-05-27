const useDebug = ([enabledLog, enabledLogError], location) => [
  (...args) => {
    if (enabledLog) {
      if (location) {
        console.log(location, ...args);
      } else {
        console.log(...args);
      }
    }
  },
  (...args) => {
    if (enabledLogError) {
      if (location) {
        console.error(location, ...args);
      } else {
        console.error(...args);
      }
    }
  },
];

export { useDebug };
