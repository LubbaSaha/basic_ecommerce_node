const User = require("../model/User");

const postUserData = async (body) => {
    
    const userData = {
        role_id: body.role_id,
        user_name: body.user_name,
        email: body.email,
        password: body.password
    }

    try {

        const user = await User.query().insert(userData);

        return {
            status: 200,
            user
        };

    } catch (error) {
        console.log(error);
        return {
            status: 500,
            msg: "Something is wrong!"
        };
    }
}

const getCategory = async () => {

    try {

        const user = await User
            .query()
            .select("id", "user_name", "email", "status");
    
            return {
                status: 200,
                user
            };

    } catch (error) {
    
        console.log(error);
        return {
            status: 500,
            msg: "Something is wrong!"
        };
    }
}

module.exports = {
    postUserData,
    getCategory
};