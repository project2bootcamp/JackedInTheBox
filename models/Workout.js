const { Model, DataTypes } = require("sequelize");
const connection = require("../config/connection");

class Workout extends Model {}

Workout.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    goal: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [3],
        },
    },
    sequence: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [3],
        },
    },
    muscleGroup: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [3],
        },
    },
    // !match some of these with API!

    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "user",
            key: "id",
        },
    },
}, {
    sequelize: connection,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "workouts",
});

module.exports = Workout;