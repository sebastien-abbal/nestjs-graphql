#!/bin/sh
# API sh cmds on docker build init

yarn start --env $NODE_ENV > /dev/null

pm2 logs api | sed 's/^[0-9]|api.*|//' > /dev/stdout
