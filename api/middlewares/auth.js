const isAdmin = (req, res, next) => {
    
    if (!req.is_admin) {
        return res.status(403).json({
            msg: "Unauthorized"
        });
    }

    next();
}

module.exports = {
    isAdmin
}