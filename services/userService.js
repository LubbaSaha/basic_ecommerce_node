const User = require("../model/User");

const doesUserExist = async (email) => {
    const userExist = await User.query().select("id").findOne({ email });
    return userExist;
}

const postUserData = async (body) => {
    
    const userData = {
        user_name: body.user_name,
        email: body.email,
        password: body.password,
        status: body.status
    }

    try {

        const oldUser = await doesUserExist(body.email);

        if (oldUser) {
            return {
                status: 403,
                msg: "User Data already exist",
                user: oldUser
            };
        }

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

const getUsers = async () => {

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
    doesUserExist,
    postUserData,
    getUsers
};