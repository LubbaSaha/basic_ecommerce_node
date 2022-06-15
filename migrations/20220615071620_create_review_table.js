/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("review", table => {
        table.collate("utf8mb4_unicode_ci");
        table.increments("id").primary();
        table.integer("u_id").unsigned().notNullable();
        table.integer("rating").unsigned().notNullable();
        table.string("comment", 255);
        table.foreign("u_id").references("id").inTable("user").onDelete("CASCADE");
        table.timestamps(false, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("review");
};
