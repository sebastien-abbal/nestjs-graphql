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

sls offline;
exit 1;