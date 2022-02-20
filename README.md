<p align="center">
  <a href="https://www.mariaschools.com/" target="blank"><img src="/.github/assets/logo.png" alt="Maria Logo" /></a>
</p>

# Welcome to NestJS template

This is a **[NestJS](https://nestjs.com/)** application based on the **[Sébastien Abbal](https://github.com/sebastien-abbal)** template, working with node.js language and Typescript.

# 👾 Prerequistes

- [An AWS Account](https://aws.amazon.com/) (For AWS credentials)
- [Aws-cli](https://docs.aws.amazon.com/fr_fr/cli/latest/userguide/install-cliv2.html) (AWS environment)
- [Serverless](https://www.serverless.com/) (For AWS deployment)
- [NodeJS](https://nodejs.org/) (14.x or more)
- [Postgres](https://www.postgresql.org/docs/) (For Postgres local DB on your computer)
- [Typescript](https://www.typescriptlang.org/) (Due to typescript project)

Note this project uses [Yarn](https://yarnpkg.com).

# 🚀 Get started

#### Installation

In first, you have to clone this repository on your machine.

```
$ git clone https://github.com/sebastien-abbal/nestjs-graphql.git
```

#### Setup your .env

Create a file named `.env` with this format:

```bash
NODE_ENV="dev"
APP_PORT="3000"
APP_HOST="localhost"
AWS_REGION="eu-west-3"
DATABASE_URL="postgresql://johndoe:password@localhost:5432/mydb?schema=public"
JWT_PUBLIC_KEY="XXXXXXXXXXXXXXXXXXXXXX"
JWT_PRIVATE_KEY="XXXXXXXXXXXXXXXXXXXXXX"
JWT_ACCESS_TOKEN_EXPIRATION_TIME="86400"
JWT_REFRESH_TOKEN_EXPIRATION_TIME="2592000"
ENCRYPTION_KEY="XXXXXXXXXXXXXXXXXXXXXX"
```

#### Build project

Now you have to run this command lines to build the project.

```bash
$ yarn
$ yarn build
```

Well done ! :)

#### Run the project

> If you want to run the project in `dev mode`, run this command line:

```bash
$ yarn start:dev
```

> If you want to run the project in `serverless offline`, run this command line:

```bash
$ yarn sls:offline
```

#### Deploy the project

To deploy the project in `AWS` with serverless, you have to run this command line:

```bash
$ yarn sls:deploy
```

# 🚦 Tests

To test all the app with jest, you need to run this command line:

```
$ yarn test
$ yarn test:e2e
$ yarn test:full
```

# ♻️ Migrations

There is an ORM named **[Prisma](https://www.prisma.io/)** used in this app to run migrations and manage the databases easily.
To setup your database, you have to add the existing migrations, to do that, run this command line:

```
$ yarn migrate:deploy
```

When you make an update on your entities, don't forget to generate the migration files by using this command line:

```
$ yarn migrate:dev
```

> ⚠️ Run `yarn migrate:dev` only in development mode and never in production mode.

## License

This template is [MIT licensed](LICENSE.md).
