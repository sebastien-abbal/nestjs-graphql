export const capitalize = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

export const databaseUrlToParams = (databaseUrl: string) => {
  const result = databaseUrl.split(/:\/\/|\/|:|@|\?/);
  return {
    protocol: result[0],
    user: result[1],
    password: result[2],
    host: result[3],
    port: parseInt(result[4]),
    name: result[5],
  };
};
