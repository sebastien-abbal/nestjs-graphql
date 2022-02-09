import { MigrationInterface, QueryRunner } from 'typeorm';

export class userAvatar1644424212975 implements MigrationInterface {
  name = 'userAvatar1644424212975';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TYPE "public"."user-avatars_source_enum" AS ENUM('AWS')`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."user-avatars_status_enum" AS ENUM('ONLINE', 'OFFLINE', 'ERROR')`,
    );
    await queryRunner.query(
      `CREATE TABLE "user-avatars" ("source" "public"."user-avatars_source_enum" NOT NULL, "status" "public"."user-avatars_status_enum" NOT NULL, "size" bigint, "fileToDeleteAt" date, "width" bigint, "height" bigint, "createdAt" date NOT NULL DEFAULT NOW(), "updatedAt" date, "deletedAt" date, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "userId" uuid, CONSTRAINT "PK_dfd830352de89a9f626ab2014a7" PRIMARY KEY ("id"))`,
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
  }
}
