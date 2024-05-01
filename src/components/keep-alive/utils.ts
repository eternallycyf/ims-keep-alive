export const isKeepPath = (keepPaths: Array<string | RegExp>, path: string) => {
  let isKeep = false;
  for (let i = 0; i < keepPaths.length; i++) {
    let item = keepPaths[i];
    if (item === path) {
      isKeep = true;
    }
    if (item instanceof RegExp && item.test(path)) {
      isKeep = true;
    }
    if (typeof item === 'string' && item.toLowerCase() === path) {
      isKeep = true;
    }
  }
  return isKeep;
};
