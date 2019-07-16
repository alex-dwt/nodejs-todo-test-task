const express = require('express');
const bodyParser = require('body-parser');

const TasksController = require('./controllers/TasksController');

const app = express();
app.use(bodyParser.json());

app.use('/api/tasks', TasksController);

app.listen(8000);
