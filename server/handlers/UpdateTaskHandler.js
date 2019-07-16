const TasksRepository = require('../repositories/TasksRepository');

module.exports = async (taskId, label) => {
    try {
        const task = await TasksRepository.getOneById(taskId);

        if (task) {
            task.label = label;
            await task.save();

            return task;
        }
    } catch (e) {
    }

    return null;
};