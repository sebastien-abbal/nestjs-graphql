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
