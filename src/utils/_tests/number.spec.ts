import { bytesToSize, clamp, random, secondsToHms } from '@utils';

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

  describe('secondsToHms function', () => {
    it('should respond value 00:00:23 from 23 seconds', () =>
      expect(secondsToHms(23)).toBe('00:00:23'));

    it('should respond value 00:12:23 from 743 seconds', () =>
      expect(secondsToHms(743)).toBe('00:12:23'));

    it('should respond value 00:00:23 from 4343 seconds', () =>
      expect(secondsToHms(4343)).toBe('01:12:23'));

    it('should respond value 24:00:00 from 86400 seconds', () =>
      expect(secondsToHms(86400)).toBe('24:00:00'));

    it('should respond value 200:00:00 from 720000 seconds', () =>
      expect(secondsToHms(720000)).toBe('200:00:00'));

    it('should respond value 00:00:00 from O and -1000 seconds', () => {
      expect(secondsToHms(0)).toBe('00:00:00');
      expect(secondsToHms(-1000)).toBe('00:00:00');
    });
  });

  describe('bytesToSize function', () => {
    it('should respond value "16.00 KB" from 16384 bytes', () =>
      expect(bytesToSize(16384)).toBe('16.00 KB'));

    it('should respond value "5.66 MB" from 5930054 bytes', () =>
      expect(bytesToSize(5930054)).toBe('5.66 MB'));

    it('should respond value "5.52 GB" from 5930054583 bytes', () =>
      expect(bytesToSize(5930054583)).toBe('5.52 GB'));

    it('should respond value "3 bytes" from 3 bytes', () =>
      expect(bytesToSize(3)).toBe('3 bytes'));

    it('should respond value "0 bytes" from 0 and -1000 bytes', () => {
      expect(bytesToSize(0)).toBe('0 bytes');
      expect(bytesToSize(-1000)).toBe('0 bytes');
    });
  });
});
