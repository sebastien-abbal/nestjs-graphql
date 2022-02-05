import { env } from '@config';

export const graphqlConfig = () => ({
  isPlaygroundEnabled: !['prod', 'preprod'].includes(env),
  isDebugEnabled: !['prod', 'preprod'].includes(env),
});
