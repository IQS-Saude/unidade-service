import { MigrationInterface, QueryRunner } from 'typeorm';

export class Initial1649649612644 implements MigrationInterface {
  name = 'Initial1649649612644';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`unidades\` (\`id\` int NOT NULL AUTO_INCREMENT, \`descricao\` varchar(255) NOT NULL, \`urlAmigavel\` varchar(255) NOT NULL, \`estado\` varchar(255) NOT NULL, \`cidade\` varchar(255) NOT NULL, \`logradouro\` varchar(255) NOT NULL, \`numero\` varchar(255) NOT NULL, \`bairro\` varchar(255) NOT NULL, \`cep\` bigint NOT NULL, \`latitude\` decimal NOT NULL, \`longitude\` decimal NOT NULL, \`telefone\` bigint NULL, \`celular\` bigint NULL, \`email\` varchar(255) NULL, \`urlFacebook\` varchar(255) NULL, \`urlInstagram\` varchar(255) NULL, \`urlYoutube\` varchar(255) NULL, \`status\` tinyint NOT NULL DEFAULT 1, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`unidades\``);
  }
}
