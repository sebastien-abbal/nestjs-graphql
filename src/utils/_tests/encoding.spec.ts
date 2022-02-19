import { base64Decode, base64Encode } from '../../utils';

describe('Utils (Encoding)', () => {
  const valueDecoded = 'Dobby the best';
  const valueEncoded = 'RG9iYnkgdGhlIGJlc3Q=';

  describe('base64Encode function', () => {
    it('should respond encoding string to base64', () => {
      expect(base64Encode(valueDecoded)).toBe(valueEncoded);
    });
  });

  describe('base64Decode function', () => {
    it('should respond decoding base64 to string', () => {
      expect(base64Decode(valueEncoded)).toBe(valueDecoded);
    });
  });
});
