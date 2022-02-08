import { capitalize } from '@utils';

describe('Utils (String)', () => {
  describe('capitalize function', () => {
    const text1 = 'DOBBY';
    const text2 = 'dobby';

    it('should respond a text capitalized', () => {
      expect(capitalize(text1)).toBe('DOBBY');
      expect(capitalize(text2)).toBe('Dobby');
    });
  });
});
