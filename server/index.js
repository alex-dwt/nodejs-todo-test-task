const express = require('express');
const bodyParser = require('body-parser');

const TASKS_URL = '/api/tasks';

const TasksController = require('./controllers/TasksController');

const app = express();
app.use(bodyParser.json());

app.use(TASKS_URL, TasksController);

app.listen(8000);

module.exports = {
    app,
    TASKS_URL,
};