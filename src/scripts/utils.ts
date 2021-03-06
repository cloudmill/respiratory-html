export const normIndex = (index, items) =>
  index < 0 ? items.length - 1 : index % items.length;

export const getTrio = (index, items) => ({
  prev: items[normIndex(index - 1, items)],
  current: items[normIndex(index, items)],
  next: items[normIndex(index + 1, items)],
});

export const getPercent = (value) => `${value}%`;

export const getSelector = (name) => `[data-${name}]`;

export const getPx = (value) => `${value}px`;

export const getClassFromMod = (className, mod) =>
  (mod && `${className}--${mod}`) || "";

export const getClassesFromMods = (className, mods) =>
  mods && mods.map((mod) => getClassFromMod(className, mod));

export const checkBrInString = (srt) => /<br>/.test(srt);

export const getWordsWhiteSpace = (str) => str.split(" ");

export const getWordsBr = (str: string): string[] => str.split("<br>");
