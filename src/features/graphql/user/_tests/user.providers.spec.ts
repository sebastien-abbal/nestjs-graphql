import { constants } from '@config';
import { userProviders } from '@features/graphql/user/user.providers';

describe('User providers', () => {
  describe('Providers exists', () => {
    it('should be defined', () => {
      expect(userProviders).toBeDefined();
    });

    it('should return at least 1 item in array', () => {
      expect(userProviders.length).toBeGreaterThanOrEqual(1);
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
