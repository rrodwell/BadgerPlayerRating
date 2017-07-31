module.exports = function(sequelize, DataTypes) {
    var Player = sequelize.define("player", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        position: {
            type: DataTypes.STRING,
            allowNull: false
        },
        proBowl: {
            //boolean 0/1
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        age: {
            //int 2 digits
            type: DataTypes.INTEGER,
            allowNull: false
        },
        qb: {
            //boolean 0/1
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        rb: {
            //boolean 0/1
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        k: {
            //boolean 0/1
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        te: {
            //boolean 0/1
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    });
    return Player;
};