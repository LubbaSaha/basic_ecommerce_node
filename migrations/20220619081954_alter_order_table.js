/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.table("order", table => {
        table.dropColumn("user_name");
        table.dropColumn("email");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.table("order", table => {
        table.string("user_name", 255).notNullable();
        table.string("email", 255).notNullable();
    });
};
