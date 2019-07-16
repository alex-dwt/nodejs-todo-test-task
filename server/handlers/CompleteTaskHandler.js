const TasksRepository = require('../repositories/TasksRepository');

module.exports = async taskId => {
    try {
        const task = await TasksRepository.getOneById(taskId);

        if (task) {
            task.isCompleted = true;
            await task.save();

            return task;
        }
    } catch (e) {
    }

    return null;
};