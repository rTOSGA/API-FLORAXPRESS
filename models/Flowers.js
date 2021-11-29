const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Flowers = sequelize.define("Flowers", {
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
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },        
    });

    Flowers.associate = (models) => {
        Flowers.belongsToMany(models.Users, {
            through: 'UserFlower',
            as: 'users',
            })
    }

    return Flowers;
};