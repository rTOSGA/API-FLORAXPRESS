const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Plants = sequelize.define("Plants", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        size: {
            type: DataTypes.INTEGER,
            allowNull: false,         
        },
        quality: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        stage: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },        
    });

    return Plants;
};