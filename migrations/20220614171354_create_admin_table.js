/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable("admin", table => {
        table.increments("id").primary(),
        table.string("admin_name", 50).notNullable(),
        table.string("email", 50).notNullable(),
        table.string("password", 50).notNullable(),
        table.timestamps(false, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("admin");
};
