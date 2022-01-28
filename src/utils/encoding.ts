export const base64Encode = (string: string): string => {
  return Buffer.from(string).toString('base64');
};

export const base64Decode = (string: string): string => {
  return Buffer.from(string, 'base64').toString('ascii');
};
