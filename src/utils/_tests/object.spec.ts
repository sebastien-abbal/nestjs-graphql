import { deepReplace } from '@utils';

describe('Utils (Object)', () => {
  describe('deepReplace function', () => {
    it('should respond an object with a password set to ***', () => {
      const object1 = { username: 'elioth', item: { password: 'pikachu' } };
      expect(deepReplace(object1, ['password'], '***')).toMatchObject({
        username: 'elioth',
        item: { password: '***' },
      });

      const object2 = { password: 'pikachu', item: { username: 'elioth' } };
      expect(deepReplace(object2, ['password'], '***')).toMatchObject({
        password: '***',
        item: { username: 'elioth' },
      });
    });

    it('should respond an object with firstName keys updated to Vanessa', () => {
      const object3 = {
        firstName: 'elioth',
        lastName: 'doe',
        password: '***',
        user: {
          firstName: 'elioth',
          item: { firstName: 'elioth', lastName: 'doe', age: 24 },
        },
      };
      expect(deepReplace(object3, ['firstName'], 'Vanessa')).toMatchObject({
        firstName: 'Vanessa',
        lastName: 'doe',
        password: '***',
        user: {
          firstName: 'Vanessa',
          item: { firstName: 'Vanessa', lastName: 'doe', age: 24 },
        },
      });
    });

    it('should respond an object with phoneNumber and email keys updated to ***', () => {
      const object4 = {
        firstName: 'elioth',
        lastName: 'doe',
        password: 'pikachu',
        email: 'elioth.doe@email.com',
        user: {
          firstName: 'elioth',
          phoneNumber: '+33600112233',
          item: {
            firstName: 'elioth',
            email: 'elioth.doe@email.com',
            lastName: 'doe',
            age: 24,
          },
        },
      };
      expect(
        deepReplace(object4, ['email', 'phoneNumber'], '***'),
      ).toMatchObject({
        firstName: 'elioth',
        lastName: 'doe',
        password: 'pikachu',
        email: '***',
        user: {
          firstName: 'elioth',
          phoneNumber: '***',
          item: {
            firstName: 'elioth',
            email: '***',
            lastName: 'doe',
            age: 24,
          },
        },
      });
    });
  });
});
