/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("user", table => {
        table.collate("utf8mb4_unicode_ci");
        table.increments("id").primary();
        table.integer("role_id").unsigned().notNullable();
        table.string("user_name", 50).notNullable();
        table.string("email", 50).notNullable();
        table.string("password", 100).notNullable();
        table.foreign("role_id").references("id").inTable("user_role").onDelete("CASCADE");
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
