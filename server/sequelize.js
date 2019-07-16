const Sequelize = require('sequelize');
const TaskModel = require('./models/Task');

const sequelize = new Sequelize('example', 'example', 'example', {
    host: 'localhost',
    dialect: 'postgres',
});

const Task = TaskModel(sequelize, Sequelize);

sequelize.sync();

module.exports = {
    Task,
};