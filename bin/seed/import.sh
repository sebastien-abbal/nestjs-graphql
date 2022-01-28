source ${BASH_SOURCE%/*}/../../.env

psql ${DATABASE_URL/?schema=public/""} < prisma/data/seed.sql