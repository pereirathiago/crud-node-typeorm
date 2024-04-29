import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createDrink1707675436923 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'drinks',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                    },
                    {
                        name: 'categoria_id',
                        type: 'uuid',
                        isNullable: false,
                    },
                    {
                        name: 'nome',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'descricao',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ],
                foreignKeys: [
                    {
                        name: 'FKCategoriaDrinkCategoriaId',
                        referencedTableName: 'categorias',
                        referencedColumnNames: ['id'],
                        columnNames: ['categoria_id'],
                        onDelete: 'SET NULL',
                        onUpdate: 'SET NULL'
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('drinks');
    }

}
