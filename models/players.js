module.exports = function(sequelize, DataTypes) {
    var PlayerInformation = sequelize.define("PlayerInfo", {
        playerID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        recruitingCordinator: {
            type: DataTypes.STRING,
            allowNull: false
        },
        highSchool: {
            type: DataTypes.STRING,
            allowNull: false
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false
        },
        gradYear: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        jerseyNumber: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        projectPosition: {
            type: DataTypes.STRING,
            allowNull: false
        },
        HT: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        WT: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        GPA: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        SAT: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        ACT: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        evaluatedBy: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        score: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        category1: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        category2: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        category3: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        category4: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        category5: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        category6: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        category7: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        category8: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        category9: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        category10: {
            type: DataTypes.INTEGER,
            allowNull: false
        }

    });
    return PlayerInformation;
};