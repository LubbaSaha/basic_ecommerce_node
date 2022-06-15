/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("ordered_product", table => {
        table.collate("utf8mb4_unicode_ci");
        table.integer("p_id").unsigned().notNullable();
        table.integer("o_id").unsigned().notNullable();
        
        table.foreign("p_id").references("id").inTable("product").onDelete("CASCADE");
        table.foreign("o_id").references("id").inTable("order").onDelete("CASCADE");
        
        table.timestamps(false, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("ordered_product");
};
