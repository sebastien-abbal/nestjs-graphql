import { clamp, random } from '@utils';

describe('Utils (Number)', () => {
  describe('random function', () => {
    it('should respond a random value beetween 1 and 100', () => {
      const randomValue = random(1, 100);

      expect(randomValue).toBeGreaterThanOrEqual(1);
      expect(randomValue).toBeLessThanOrEqual(100);
    });
  });

  describe('clamp function', () => {
    it('should respond value 50 to be beetween 1 and 100', () =>
      expect(clamp(1, 100, 50)).toBe(50));

    it('should respond value 101 to be beetween 1 and 100', () =>
      expect(clamp(1, 100, 101)).toBe(100));

    it('should respond value undefined to be max value', () =>
      expect(clamp(1, 100, undefined)).toBe(100));
  });
});
