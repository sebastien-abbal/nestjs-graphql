import { capitalize, nestFileFormatToCamelCase } from '../../utils';

describe('Utils (String)', () => {
  describe('capitalize function', () => {
    const text1 = 'DOBBY';
    const text2 = 'dobby';

    it('should respond a text capitalized', () => {
      expect(capitalize(text1)).toBe('DOBBY');
      expect(capitalize(text2)).toBe('Dobby');
    });
  });

  describe('nestFileFormatToCamelCase function', () => {
    const text1 = '/Users/etc/xxx/src/user-avatar.entity.ts';
    const text2 = 'user-avatar.entity.js';

    it('should respond "UserAvatarEntity"', () => {
      expect(nestFileFormatToCamelCase(text1)).toBe('UserAvatarEntity');
      expect(nestFileFormatToCamelCase(text2)).toBe('UserAvatarEntity');
    });
  });
});
