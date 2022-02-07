export const constants = {
  app: {
    name: 'GraphQL nest API',
    company: 'Sébastien ABBAL',
    envsAvailable: ['prod', 'preprod', 'dev', 'test'],
  },
  databases: {
    postgres: {
      name: 'postgres-db',
      providerName: 'POSTGRES_CONNECTION',
    },
  },
  graphql: {
    complexity: {
      max: 50,
      defaultValue: 1,
    },
    query: {
      defaultTakeResults: 20,
      defaultSkip: 0,
      maxResults: 100,
      minResults: 1,
    },
  },
};
