/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("order", table => {
        table.collate("utf8mb4_unicode_ci");
        table.increments("id").primary();
        table.integer("u_id").unsigned().notNullable();

        table.foreign("u_id").references("id").inTable("user").onDelete("CASCADE");

        table.string("status", 100).notNullable();
        table.string("user_name", 255).notNullable();
        table.string("email", 255).notNullable();
        table.string("address", 255);
        table.timestamps(false, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("order");
};
