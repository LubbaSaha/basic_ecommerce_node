/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("user", table => {
        table.collate("utf8mb4_unicode_ci");
        table.increments("id").primary();
        table.string("user_name", 50).notNullable();
        table.string("email", 50).notNullable();
        table.string("password", 100);
        table.string("status", 100).notNullable();
        table.timestamps(false, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("user");
};
