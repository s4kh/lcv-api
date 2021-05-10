import {MigrationInterface, QueryRunner} from "typeorm";

export class VideoMigration1620656721820 implements MigrationInterface {
    name = 'VideoMigration1620656721820'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "video" DROP COLUMN "created"`);
        await queryRunner.query(`ALTER TABLE "video" DROP COLUMN "updated"`);
        await queryRunner.query(`ALTER TABLE "video" DROP COLUMN "deletedAt"`);
        await queryRunner.query(`ALTER TABLE "video" ADD "created" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "video" ADD "updated" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "video" ADD "deletedAt" TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "video" DROP COLUMN "deletedAt"`);
        await queryRunner.query(`ALTER TABLE "video" DROP COLUMN "updated"`);
        await queryRunner.query(`ALTER TABLE "video" DROP COLUMN "created"`);
        await queryRunner.query(`ALTER TABLE "video" ADD "deletedAt" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "video" ADD "updated" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "video" ADD "created" TIMESTAMP NOT NULL DEFAULT now()`);
    }

}
