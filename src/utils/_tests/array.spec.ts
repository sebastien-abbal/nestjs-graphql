import { chunkArray } from '@utils';

describe('Utils (Array)', () => {
  describe('chunkArray function', () => {
    const stringArrayToChunk = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
    const objectArrayToChunk = [
      { id: 'x' },
      { id: 'x' },
      { id: 'x' },
      { id: 'x' },
      { id: 'x' },
    ];

    it('should respond an array to multiple arrays by modulo 3', () => {
      const stringsResult = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g']];
      const objectsResult = [
        [{ id: 'x' }, { id: 'x' }, { id: 'x' }],
        [{ id: 'x' }, { id: 'x' }],
      ];

      expect(chunkArray(stringArrayToChunk, 3)).toEqual(stringsResult);
      expect(chunkArray(objectArrayToChunk, 3)).toEqual(objectsResult);
    });

    it('should respond an array to multiple arrays by modulo 4', () => {
      const stringsResult = [
        ['a', 'b', 'c', 'd'],
        ['e', 'f', 'g'],
      ];
      const objectsResult = [
        [{ id: 'x' }, { id: 'x' }, { id: 'x' }, { id: 'x' }],
        [{ id: 'x' }],
      ];

      expect(chunkArray(stringArrayToChunk, 4)).toEqual(stringsResult);
      expect(chunkArray(objectArrayToChunk, 4)).toEqual(objectsResult);
    });
  });
});
