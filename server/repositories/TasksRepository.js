const { Task } = require('../sequelize');

const TasksRepository = {
    getOneById: id => Task.findByPk(id),

    getList: () => Task.findAll({
        order: [
            ['createdAt', 'ASC'],
        ],
    }),
};

module.exports = TasksRepository;