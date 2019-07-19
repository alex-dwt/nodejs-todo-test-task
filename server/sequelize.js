const Sequelize = require('sequelize');
const TaskModel = require('./models/Task');

const sequelize = new Sequelize(
    process.env.POSTGRES_DB,
    process.env.POSTGRES_USER,
    process.env.POSTGRES_PASSWORD,
    {
        host: 'database',
        dialect: 'postgres',
        logging: false,
    }
);

const Task = TaskModel(sequelize, Sequelize);

module.exports = {
    Task,
    sequelize,
};