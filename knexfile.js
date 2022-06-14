// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

	development: {
		client: 'mysql',
		connection: {
			host: "localhost",
			user: "root",
			password: "",
			database: "basic_ecommerce",
			charset: "UTF8MB4",
		},
		debug: true,
		acquireConnectionTimeout: 1500,
		pool: {
			min: 5,
			max: 10
		}
	},

};
