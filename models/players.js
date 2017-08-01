module.exports = function(sequelize, DataTypes) {
    var PlayerInformation = sequelize.define("PlayerInfo", {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            //WR
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
        },
        wr: {
            //boolean 0/1
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        gamesPlayed: {
            //int 2 digits
            type: DataTypes.INTEGER,
            allowNull: false
        },
        gamesStarted: {
            //int 2 digits
            type: DataTypes.INTEGER,
            allowNull: false
        },
        receptions: {
            //int 2 digits
            type: DataTypes.INTEGER,
            allowNull: false
        },
        longestReception: {
            //int 2 digits
            type: DataTypes.INTEGER,
            allowNull: false
        },
        longestRushingAttempt: {
            //int 2 digits (can be neg)
            type: DataTypes.INTEGER,
            allowNull: false
        },
        pickNumber: {
            //int 3 digits
            type: DataTypes.INTEGER,
            allowNull: false
        },
        ydsSkd: {
            //int 3 digits
            type: DataTypes.INTEGER,
            allowNull: false
        },
        fantasyPoints: {
            //dec 10 dig 3 places
            type: DataTypes.DECIMAL(10, 3),
            allowNull: false
        },
        imgPath: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return Player;
};