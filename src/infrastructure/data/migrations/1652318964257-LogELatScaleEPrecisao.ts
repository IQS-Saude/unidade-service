import { MigrationInterface, QueryRunner } from 'typeorm';

export class LogELatScaleEPrecisao1652318964257 implements MigrationInterface {
  name = 'LogELatScaleEPrecisao1652318964257';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`unidades\` CHANGE \`latitude\` \`latitude\` decimal(12,8) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`unidades\` CHANGE \`longitude\` \`longitude\` decimal(12,8) NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`unidades\` CHANGE \`longitude\` \`longitude\` decimal(10,0) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`unidades\` CHANGE \`latitude\` \`latitude\` decimal(10,0) NULL`,
    );
  }
}
