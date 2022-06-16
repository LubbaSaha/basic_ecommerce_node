const Admin = require("../model/Admin");

const postAdminData = async (body) => {
    
    const adminData = {
        admin_name: body.admin_name,
        email: body.email,
        password: body.password
    }

    try {

        const admin = await Admin.query().insert(adminData);

        return {
            status: 200,
            admin
        };

    } catch (error) {
        console.log(error);
        
        return {
            status: 500,
            msg: "Something is wrong!"
        };
    }
}

const getAdmins = async () => {

    try {

        const admin = await Admin
            .query()
            .select("id", "admin_name", "email", "password");
    
            return {
                status: 200,
                admin
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
    postAdminData,
    getAdmins
};