import { MigrationInterface, QueryRunner } from 'typeorm';

export class LatELogNullable1650254665864 implements MigrationInterface {
  name = 'LatELogNullable1650254665864';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`unidades\` CHANGE \`latitude\` \`latitude\` decimal NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`unidades\` CHANGE \`longitude\` \`longitude\` decimal NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`unidades\` CHANGE \`email\` \`email\` varchar(255) NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`unidades\` CHANGE \`email\` \`email\` varchar(255) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`unidades\` CHANGE \`longitude\` \`longitude\` decimal NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`unidades\` CHANGE \`latitude\` \`latitude\` decimal NOT NULL`,
    );
  }
}
