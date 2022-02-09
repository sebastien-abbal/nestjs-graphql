import { constants } from '@config';
import { userProviders } from '@features/graphql/user/user.providers';

describe('User providers', () => {
  describe('Providers exists', () => {
    it('should be defined', () => {
      expect(userProviders).toBeDefined();
    });

    it('should return 2 repository items in an array', () => {
      expect(userProviders.length).toBe(2);
    });
  });

  describe('Providers format', () => {
    it('should return an array of providers format', () => {
      for (const provider of userProviders) {
        expect(provider).toEqual(
          expect.objectContaining({
            provide: expect.any(String),
            useFactory: expect.any(Function),
            inject: [constants.databases.postgres.providerName],
          }),
        );
      }
    });
  });
});
