import { env } from '@config';

export const graphqlConfig = () => ({
  generatedSchemaFileLocation: 'generated/schema.gql',
  isPlaygroundEnabled: !['prod', 'preprod'].includes(env),
  isDebugEnabled: !['prod', 'preprod'].includes(env),
});
