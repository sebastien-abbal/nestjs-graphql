import { env } from '@config';
import * as envVar from 'env-var';
import { join } from 'path';

export const graphqlConfig = () => ({
  isSchemaAuto: envVar.get('GQL_IS_AUTO_SCHEMA').default(0).asBool(),
  schemaFilePath: join(process.cwd(), 'generated/schema.gql'),
  isPlaygroundEnabled: !['prod', 'preprod'].includes(env),
  isDebugEnabled: !['prod', 'preprod'].includes(env),
});
