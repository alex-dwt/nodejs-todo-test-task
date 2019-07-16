module.exports = (sequelize, type) => sequelize.define(
    'task',
    {
        isCompleted: {
            type: type.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        label: {
            type: type.STRING,
            allowNull: false,
        },
        id: {
            type: type.UUID,
            primaryKey: true
        },
    },
    {
        updatedAt: false,
    }
);
