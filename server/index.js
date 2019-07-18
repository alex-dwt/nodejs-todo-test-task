const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const TASKS_URL = '/api/tasks';

const TasksController = require('./controllers/TasksController');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const CLIENT_FILES_PATH = '../client/build';
app.use(express.static(path.join(__dirname, CLIENT_FILES_PATH)));
app.get(
  /^\/(?!api).*/,
  (req, res) => res.sendFile(path.join(__dirname, CLIENT_FILES_PATH, 'index.html'))
);

app.use(TASKS_URL, TasksController);

app.listen(80);

module.exports = {
    app,
    TASKS_URL,
};