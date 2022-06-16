const { Model } = require("objection");
// const Review = require("./Review");

class Product extends Model {
    static get tableName() {
        return "product";
    }

    static get idColumn() {
        return "id";
    }

    $beforeUpdate() {
        this.updated_at = require("moment")().format("YYYY-MM-DD hh:mm:ss");
    }

    // static get relationMappings() {
    //     return {
    //         review: {
    //             relation: Model.HasManyRelation,
    //             modelClass: Review,
    //             join: {
    //                 from: "user.id",
    //                 to: "review.u_id"
    //             }
    //         }
    //     };
    // }
}

module.exports = Product;