import { TypenameGraphQLError } from '../../utils';

describe('Utils (GraphQL)', () => {
  describe('generateGraphQLError function', () => {
    const ERROR_NAME = 'WrongCredentialsError';

    it('should generate a graphql error without message', () => {
      expect(new TypenameGraphQLError(ERROR_NAME)).toMatchObject({
        code: ERROR_NAME,
        message: '',
      });
    });

    it('should generate a graphql error with message', () => {
      const ERROR_MESSAGE = 'Lorem ipsum';
      expect(new TypenameGraphQLError(ERROR_NAME, ERROR_MESSAGE)).toMatchObject(
        {
          code: ERROR_NAME,
          message: ERROR_MESSAGE,
        },
      );
    });
  });
});
