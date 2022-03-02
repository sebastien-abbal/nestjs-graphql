<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

# Welcome to NestJS template

This is a **[NestJS](https://nestjs.com/)** template made by **[Sébastien Abbal](https://github.com/sebastien-abbal)** based on node.js language with Typescript.

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
# REQUIRED
NODE_ENV="dev"
AWS_KEY_REGION="eu-west-3"
DOMAIN_URL="xxxxxxxxx.com"
ASSETS_CDN_URL="xxxxxxxxx.cloudfront.net"
DATABASE_URL="postgresql://admin:password@localhost:5432/postgres?schema=public"
JWT_PUBLIC_KEY="XXXXXXXXXXXXXXXXXXXXXX"
JWT_PRIVATE_KEY="XXXXXXXXXXXXXXXXXXXXXX"

# OPTIONAL
APP_PORT="3000"
JWT_ACCESS_TOKEN_EXPIRATION_TIME="86400"
JWT_REFRESH_TOKEN_EXPIRATION_TIME="2592000"
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

# 🔥 Deployment

To deploy the full project to **[Serverless](https://www.serverless.com/)**, you need to anderstand the infrastructure first with this schema:

![AWS Infrastructure schema](/.github/assets/aws.png)

As you can see, there is an [AWS Route53](https://aws.amazon.com/fr/route53/) service needed to deploy all on your domain name.
Please, follow this steps:

1.  Buy a domain name [here on Route53](https://console.aws.amazon.com/route53/home#DomainRegistration:) (Global region only).
2.  Create a certificate in your region [here](https://eu-west-3.console.aws.amazon.com/acm/home?region=eu-west-3#/certificates/request) with the domain name set to `*.your-domain.com` to let all subdomains and www on your domain. It will facilitate the deployment with the [domain manage plugin](https://github.com/amplify-education/serverless-domain-manager).
3.  Create a key pair for your environment [here](https://eu-west-3.console.aws.amazon.com/ec2/v2/home?region=eu-west-3#KeyPairs:) with the env name (it can be: `dev`, `preprod`, `prod`). Keep it safe, and add it to your `.ssh` folder.
4.  Run the cmd `yarn sls:domain` to generate the DNS records `A` and `AAAA`.
5.  Run the cmd `yarn sls:deploy`.

Note you are not forced to deploy with a domain name, remove the `customDomain` from the config file `sls-deploy.config.ts` and run `yarn sls:deploy`.

> ⚠️ **IMPORTANT**: If you add an `alarmEmails` or `alarmPhones` to your config, you will receive verification notification (validate this verification to be notified when alarms are triggered)
>
> - Phone number need to be validated with a validation code [here](https://eu-west-3.console.aws.amazon.com/sns/v3/home?region=eu-west-3#/subscriptions)
> - Email need to be validated with a confirmation email sent to the endpoint

# 🏰 Bastion

To access your **bastion** in order to manage the private subnet resources, you can start this command :

- Replace **`[env]`** with your environment stage (it can be: `dev`, `preprod`, `prod`)
- Replace **`[server-ip]`** with your EC2 public ip, go [here](https://eu-west-3.console.aws.amazon.com/ec2/v2/home?region=eu-west-3#Instances:).

```
$ ssh -i .ssh/[env].pem ec2-user@[server-ip]
```

Note it will be important for security to **stop bastion EC2 instances** when you are done with your technical process in private security group to **limit costs and increase the security**.

---

> ⚠️ `WARNING: UNPROTECTED PRIVATE KEY FILE!` error occurred, you can run the command:

```
$ chmod 400 .ssh/[env].pem
```

> ⚠️ `WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!` error occurred, you can run the command below so that add this ip to your `known_hosts`.

```
$ ssh-keygen -R [server-ip]
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

When it's necessary to push prisma migrations to aws private subnets, you can create a connection to the bastion so that permit you to generate a tunneling from your computer to the RDS.
For example, you can run this command (listen in local to port 5000):

```
$ ssh -i .ssh/[env].pem -l ec2-user -L 5000:[rds-endpoint]:5432 [bastion-public-ip] -v
```

It's needed to modify `DATABASE_URL` in your `.env` file :

```bash
...
DATABASE_URL="postgresql://[db-user]:[db-password]@localhost:5000/[db-name]?schema=public"
...
```

Now, you are connected to RDS from your computer, you can run this kind of commands :

```bash
# Check if rds endpoint is available and connected with your tunneling
$ pg_isready --dbname=[db-name] --host=localhost --port=5000 --username=[db-user]

# Run the prisma commands
$ yarn studio
$ yarn migrate:deploy
$ yarn script:required-data-generator
```

## License

This template is [MIT licensed](LICENSE.md).
