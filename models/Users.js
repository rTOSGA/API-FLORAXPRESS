const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        roles: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isIn: [['ROLE_ADMIN', 'ROLE_SELLER', 'ROLE_BUYER']],
            },
        },
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            default: false,
        },
    });

    return Users;
};