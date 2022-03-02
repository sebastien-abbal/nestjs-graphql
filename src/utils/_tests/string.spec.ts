import { capitalize, databaseUrlToParams } from '@utils';

describe('Utils (String)', () => {
  describe('capitalize function', () => {
    const text1 = 'DOBBY';
    const text2 = 'dobby';

    it('should respond a text capitalized', () => {
      expect(capitalize(text1)).toBe('DOBBY');
      expect(capitalize(text2)).toBe('Dobby');
    });
  });

  describe('databaseUrlToParams function', () => {
    const DB_HOST = 'localhost';
    const DB_HOST_AWS_RDS =
      'test-db-postgres.xxxxxxxxxxxxxx.eu-west-3.rds.amazonaws.com';
    const DB_PORT = 5432;
    const DB_USER = 'admin';
    const DB_PASSWORD = 'password';
    const DB_NAME = 'mydb';

    const DATABASE_URL_1 =
      'postgresql://admin:password@localhost:5432/mydb?schema=public';
    it('should respond a postgresql database payload', () => {
      expect(databaseUrlToParams(DATABASE_URL_1)).toEqual(
        expect.objectContaining({
          protocol: 'postgresql',
          user: DB_USER,
          password: DB_PASSWORD,
          host: DB_HOST,
          port: DB_PORT,
          name: DB_NAME,
        }),
      );
    });

    const DATABASE_URL_2 = 'mysql://admin:password@localhost:5432/mydb';
    it('should respond a mysql database payload', () => {
      expect(databaseUrlToParams(DATABASE_URL_2)).toEqual(
        expect.objectContaining({
          protocol: 'mysql',
          user: DB_USER,
          password: DB_PASSWORD,
          host: DB_HOST,
          port: DB_PORT,
          name: DB_NAME,
        }),
      );
    });

    const DATABASE_URL_3 =
      'postgresql://admin:password@test-db-postgres.xxxxxxxxxxxxxx.eu-west-3.rds.amazonaws.com:5432/mydb?schema=public';
    it('should respond a postgres database payload with complex url', () => {
      expect(databaseUrlToParams(DATABASE_URL_3)).toEqual(
        expect.objectContaining({
          protocol: 'postgresql',
          user: DB_USER,
          password: DB_PASSWORD,
          host: DB_HOST_AWS_RDS,
          port: DB_PORT,
          name: DB_NAME,
        }),
      );
    });
  });
});
