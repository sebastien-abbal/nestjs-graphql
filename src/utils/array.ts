// eslint-disable-next-line
// @ts-ignore: Because array can take any value.
// eslint-disable-next-line
export const chunkArray = (arr: any[], size: number) =>
  arr.reduce(
    (acc, e, i) => (
      i % size ? acc[acc.length - 1].push(e) : acc.push([e]), acc
    ),
    [],
  );
