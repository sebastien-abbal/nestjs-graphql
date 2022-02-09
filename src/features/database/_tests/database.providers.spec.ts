import { databaseProviders } from '@features/database/database.providers';

describe('Database providers', () => {
  describe('Providers exists', () => {
    it('should be defined', () => {
      expect(databaseProviders).toBeDefined();
    });

    it('should return at least 1 item in array', () => {
      expect(databaseProviders.length).toBeGreaterThanOrEqual(1);
    });
  });

  describe('Providers format', () => {
    it('should return an array of providers format', () => {
      for (const provider of databaseProviders) {
        expect(provider).toEqual(
          expect.objectContaining({
            name: expect.any(String),
            provide: expect.any(String),
            useFactory: expect.any(Function),
          }),
        );
      }
    });
  });
});
