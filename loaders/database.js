const Knex = require("knex");
const { Model } = require("objection");
const knexConfiq = require("../knexfile");

const loadDatabase = () => {
    const knex = Knex(knexConfiq.development);
    Model.knex(knex);

    return knex;
}

module.exports = loadDatabase;