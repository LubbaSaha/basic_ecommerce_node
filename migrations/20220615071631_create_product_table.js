/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("product", table => {
        table.collate("utf8mb4_unicode_ci");
        table.increments("id").primary();
        table.string("p_name", 255).notNullable();
        table.string("p_des", 255);
        table.integer("review_id").unsigned();
        table.integer("u_id").unsigned().notNullable();
        table.integer("cat_id").unsigned();

        table.foreign("review_id").references("id").inTable("review").onDelete("SET NULL");
        table.foreign("u_id").references("id").inTable("user").onDelete("CASCADE");
        table.foreign("cat_id").references("id").inTable("category").onDelete("SET NULL");
        
        table.boolean("is_publish").notNullable();
        table.timestamps(false, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("product");
};
