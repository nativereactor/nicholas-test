/* eslint-disable no-console */
// eslint-disable-next-line import/prefer-default-export
export const expandedLog = (item, maxDepth = 100, depth = 0) => {
  if (depth > maxDepth) {
    console.log(item);
    return;
  }
  if (typeof item === 'object' && item !== null) {
    Object.entries(item).forEach(([key, value]) => {
      console.group(`${key} : ${value}`);
      console.groupEnd();
    });
  } else {
    console.log(item);
  }
};
