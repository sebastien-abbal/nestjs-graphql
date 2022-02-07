#!/bin/deploy/serverless.sh

ENV_FILE=${BASH_SOURCE%/*}/../.env
if [ ! -f "$ENV_FILE" ]; then
    ENV_FILE=.env
fi

source $ENV_FILE;

if [ -z "$NODE_ENV" ]; then
	echo "❌ NODE_ENV not found in your .env";
	exit 1;
fi

if [ "$1" != "prod" ] && [ "$1" != "preprod" ] && [ "$1" != "dev" ]; then
	echo "❌ Missing or wrong env parameter. (ex: yarn deploy [prod,preprod,dev])";
	exit 1;
fi

if [ "$1" != "$NODE_ENV" ]; then
	echo "❌ Env provided does not match with you NODE_ENV in .env file.";
	exit 1;
fi

sls deploy --stage $1 --region eu-west-3;
exit 1;