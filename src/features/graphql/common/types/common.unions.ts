import { TestFailedError, TestSuccess } from '@features/graphql/common/types';
import { createUnionType } from '@nestjs/graphql';
import { TypenameGraphQLError } from '@utils';

export const TestPayload = createUnionType({
  name: 'TestPayload',
  types: () => [TestSuccess, TestFailedError],
  resolveType: (payload: TypenameGraphQLError | object) => {
    if (!(payload instanceof TypenameGraphQLError)) return TestSuccess.name;
    return payload.code;
  },
});
