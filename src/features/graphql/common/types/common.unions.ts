import { TestFailedError, TestResult } from '@features/graphql/common/types';
import { createUnionType } from '@nestjs/graphql';
import { TypenameGraphQLError } from '@utils';

export const TestPayload = createUnionType({
  name: 'TestPayload',
  types: () => [TestResult, TestFailedError],
  resolveType: (payload: TypenameGraphQLError | object) => {
    if (!(payload instanceof TypenameGraphQLError)) return TestResult.name;
    return payload.code;
  },
});
