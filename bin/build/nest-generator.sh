# Delete previous dist folder
rimraf dist

# Build with nest
nest build

# Import graphql schema
cp -r src/features/graphql/schema.gql dist/src/features/graphql/schema.gql