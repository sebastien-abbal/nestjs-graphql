export const clamp = (min: number, max: number, value: number): number => {
  if (!value) return max;

  return Math.min(Math.max(value, min), max);
};

export const random = (min: number, max: number) => {
  return (
    Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) +
    Math.ceil(min)
  );
};

export const secondsToHms = (timeInSeconds: number): string => {
  if (timeInSeconds <= 0) return '00:00:00';

  const h = Math.floor(timeInSeconds / 3600);
  const m = Math.floor((timeInSeconds % 3600) / 60);
  const s = Math.floor((timeInSeconds % 3600) % 60);

  return (
    (h > 9 ? h : ('0' + h).slice(-2)) +
    ':' +
    ('0' + m).slice(-2) +
    ':' +
    ('0' + s).slice(-2)
  );
};

export const bytesToSize = (bytes: number) => {
  const SIZES = ['bytes', 'KB', 'MB', 'GB', 'TB'];

  if (bytes <= 0) return `0 ${SIZES[0]}`;
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  const value = (bytes / Math.pow(1024, i)).toFixed(i === 0 ? 0 : 2);
  return `${value} ${SIZES[i]}`;
};
