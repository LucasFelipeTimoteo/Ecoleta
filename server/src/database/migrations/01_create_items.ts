import Knex from 'knex';

export async function up(Knex: Knex) { // criar a tabela
    return Knex.schema.createTable('items', table => {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('title').notNullable();
    });
}

export async function down(Knex: Knex) { // voltar atrás (deletar campo da tabela)
    return Knex.schema.dropTable('items');
}