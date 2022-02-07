import { TestFailedError, TestResult } from '@features/graphql/common/types';
import { createUnionType } from '@nestjs/graphql';
import { GraphQLTNError } from '@utils';

export const TestPayload = createUnionType({
  name: 'TestPayload',
  types: () => [TestResult, TestFailedError],
  resolveType: (payload: any) => {
    if (!(payload instanceof GraphQLTNError)) return TestResult.name;
    return payload.code;
  },
});
