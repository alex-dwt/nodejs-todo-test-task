const TasksRepository = require('../repositories/TasksRepository');

module.exports = async taskId => {
    try {
        const task = await TasksRepository.getOneById(taskId);

        if (task) {
            await task.destroy();
        }
    } catch (e) {
    }
};