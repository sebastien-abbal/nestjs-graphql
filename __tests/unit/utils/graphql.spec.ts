import { generateError, generateResult } from '@utils';

describe('Utils (GraphQL)', () => {
  describe('generateResult function', () => {
    const data = {};

    it('should generate a graphql result', () => {
      expect(generateResult({ data })).toMatchObject({ data });
    });
  });

  describe('generateError function', () => {
    const ERROR_NAME = 'WrongCredentialsError';

    it('should generate a graphql error without message', () => {
      expect(generateError(ERROR_NAME)).toMatchObject({
        code: ERROR_NAME,
        message: '',
      });
    });

    it('should generate a graphql error with message', () => {
      const ERROR_MESSAGE = 'Lorem ipsum';
      expect(generateError(ERROR_NAME, ERROR_MESSAGE)).toMatchObject({
        code: ERROR_NAME,
        message: ERROR_MESSAGE,
      });
    });
  });
});
