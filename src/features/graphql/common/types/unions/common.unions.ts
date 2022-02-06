import {
  HealthFailedError,
  HealthResult,
} from '@features/graphql/common/types';
import { createUnionType } from '@nestjs/graphql';

export const HealthPayload = createUnionType({
  name: 'HealthPayload',
  types: () => [HealthResult, HealthFailedError],
});
