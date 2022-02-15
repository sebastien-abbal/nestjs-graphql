export const capitalize = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

export const nestFileFormatToCamelCase = (file: string) =>
  file
    .split('/')
    [file.split('/').length - 1].replace(/.ts|.js/, '')
    .replace('.js', '')
    .split('-')
    .map((item) => capitalize(item))
    .join('')
    .split('.')
    .map((item) => capitalize(item))
    .join('');
