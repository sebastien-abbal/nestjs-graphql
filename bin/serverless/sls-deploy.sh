# Install prod_node_modules
rimraf -rf prod_node_modules
yarn install --prod --modules-folder prod_node_modules

# Generate node_modules layer
rimraf -rf layer
mkdir -p layer/nodejs/node_modules/.prisma
mkdir -p layer/nodejs/node_modules/@prisma
cp -a prod_node_modules/. layer/nodejs/node_modules
rimraf -rf layer/nodejs/node_modules/.prisma
rimraf -rf layer/nodejs/node_modules/@prisma
cp -r node_modules/.prisma layer/nodejs/node_modules
cp -r node_modules/@prisma layer/nodejs/node_modules
cp -r prisma layer/nodejs/prisma
mkdir -p layer/nodejs/node_modules/.prisma/client
cp -f node_modules/.prisma/**/libquery_engine-rhel-openssl-1.0.x.so.node layer/nodejs/node_modules/.prisma/client
rimraf -rf prod_node_modules

# Start serverless deploy
sls deploy --config sls-deploy.config.ts --verbose;

# Remove libs folder
rimraf -rf layer