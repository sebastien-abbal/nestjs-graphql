import { MigrationInterface, QueryRunner } from 'typeorm';

export class user1644448528374 implements MigrationInterface {
  name = 'user1644448528374';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE EXTENSION unaccent;`);

    await queryRunner.query(
      `CREATE TYPE "public"."users_locale_enum" AS ENUM('EN', 'FR')`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."users_roles_enum" AS ENUM('ADMIN', 'MODERATOR', 'USER')`,
    );
    await queryRunner.query(
      `CREATE TABLE "users" ("createdAt" TIMESTAMP NOT NULL DEFAULT NOW(), "updatedAt" TIMESTAMP, "deletedAt" TIMESTAMP, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "firstName" text NOT NULL, "lastName" text NOT NULL, "email" text NOT NULL, "password" text NOT NULL, "locale" "public"."users_locale_enum" NOT NULL DEFAULT 'EN', "roles" "public"."users_roles_enum" array NOT NULL DEFAULT '{USER}', "phoneIndex" text, "phoneNumber" text, "isPhoneVerified" boolean NOT NULL DEFAULT false, "isEmailVerified" boolean NOT NULL DEFAULT false, "lastLoginAt" TIMESTAMP NOT NULL DEFAULT NOW(), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."user-avatars_source_enum" AS ENUM('AWS')`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."user-avatars_status_enum" AS ENUM('ONLINE', 'OFFLINE', 'ERROR')`,
    );
    await queryRunner.query(
      `CREATE TABLE "user-avatars" ("source" "public"."user-avatars_source_enum" NOT NULL, "status" "public"."user-avatars_status_enum" NOT NULL, "size" bigint, "fileToDeleteAt" TIMESTAMP, "width" bigint, "height" bigint, "createdAt" TIMESTAMP NOT NULL DEFAULT NOW(), "updatedAt" TIMESTAMP, "deletedAt" TIMESTAMP, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "userId" uuid, CONSTRAINT "PK_dfd830352de89a9f626ab2014a7" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "user-avatars" ADD CONSTRAINT "FK_8dea16258618f91158382c5eceb" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user-avatars" DROP CONSTRAINT "FK_8dea16258618f91158382c5eceb"`,
    );
    await queryRunner.query(`DROP TABLE "user-avatars"`);
    await queryRunner.query(`DROP TYPE "public"."user-avatars_status_enum"`);
    await queryRunner.query(`DROP TYPE "public"."user-avatars_source_enum"`);
    await queryRunner.query(`DROP TABLE "users"`);
    await queryRunner.query(`DROP TYPE "public"."users_roles_enum"`);
    await queryRunner.query(`DROP TYPE "public"."users_locale_enum"`);
  }
}
