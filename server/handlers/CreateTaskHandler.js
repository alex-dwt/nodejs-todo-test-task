const uuid = require('uuid/v4');

const { Task } = require('../sequelize');

module.exports = async label => {
    try {
        return await Task.create({
            id: uuid(),
            label,
        });
    } catch (e) {
        return null;
    }
};