import { MigrationInterface, QueryRunner } from 'typeorm';

export class user1644402324372 implements MigrationInterface {
  name = 'user1644402324372';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TYPE "public"."users_locale_enum" AS ENUM('EN', 'FR')`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."users_roles_enum" AS ENUM('ADMIN', 'MODERATOR', 'USER')`,
    );
    await queryRunner.query(
      `CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "firstName" text NOT NULL, "lastName" text NOT NULL, "email" text NOT NULL, "password" text NOT NULL, "locale" "public"."users_locale_enum" NOT NULL DEFAULT 'EN', "roles" "public"."users_roles_enum" array NOT NULL DEFAULT '{USER}', "phoneIndex" text, "phoneNumber" text, "isPhoneVerified" boolean NOT NULL DEFAULT false, "isEmailVerified" boolean NOT NULL DEFAULT false, "lastLoginAt" date NOT NULL DEFAULT NOW(), "createdAt" date NOT NULL DEFAULT NOW(), "updatedAt" date, "deletedAt" date, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "users"`);
    await queryRunner.query(`DROP TYPE "public"."users_roles_enum"`);
    await queryRunner.query(`DROP TYPE "public"."users_locale_enum"`);
  }
}
