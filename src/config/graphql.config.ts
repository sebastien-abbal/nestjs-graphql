import { env } from '@config';

export const graphqlConfig = () => ({
  maxComplexity: 20,
  isPlaygroundEnabled: !['prod', 'preprod'].includes(env),
  isDebugEnabled: !['prod', 'preprod'].includes(env),
});
