export const deepReplace = (
  // eslint-disable-next-line
  // @ts-ignore: Because object can take any value.
  // eslint-disable-next-line
  object: { [key: string]: any },
  targetKeys: string[],
  replaceWith: string,
) => {
  const newObject = { ...object };
  Object.entries(newObject).map(([key, value]) => {
    if (typeof value === 'object') {
      newObject[key] = deepReplace(value, targetKeys, replaceWith);
    } else if (targetKeys.includes(key)) {
      newObject[key] = replaceWith;
    }
  });
  return newObject;
};
