/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("cart", table => {
        table.collate("utf8mb4_unicode_ci");
        table.increments("id").primary();
        table.integer("u_id").unsigned().notNullable();
        table.integer("p_id").unsigned().notNullable();
        table.integer("quantity").unsigned().notNullable();
        
        table.foreign("p_id").references("id").inTable("product").onDelete("CASCADE");
        table.foreign("u_id").references("id").inTable("user").onDelete("CASCADE");
        
        table.timestamps(false, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("cart");
};
