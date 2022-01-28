source ${BASH_SOURCE%/*}/../../.env

pg_dump ${DATABASE_URL/?schema=public/""} > ./prisma/data/seed.sql