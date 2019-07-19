const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const TASKS_URL = '/api/tasks';
const APP_STARTED_EVENT = 'APP_STARTED_EVENT';

const TasksController = require('./controllers/TasksController');
const {sequelize} = require('./sequelize');

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

sequelize
    .sync()
    .then(()=> {
        app.listen(80);
        app.emit(APP_STARTED_EVENT);
    })
    .catch(() => {
        console.error('Error with DB');
        process.exit(1);
    });

module.exports = {
    app,
    TASKS_URL,
    APP_STARTED_EVENT,
};