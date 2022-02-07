import { ConnectionOptions } from 'typeorm';
import { config } from '../../src/config';

const pgConfig = async (): Promise<ConnectionOptions> => {
  // const connectionManager = getConnectionManager();
  // if (!connectionManager.has(constants.databases.postgres.providerName)) {
  //   await createConnection(config.pgDatabase);
  // }

  return config.pgDatabase;
};

export default pgConfig();
