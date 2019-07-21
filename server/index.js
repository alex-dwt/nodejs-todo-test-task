import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import Routes from './client/src/routes';
import {
    renderRoutes,
    matchRoutes,
} from 'react-router-config';
import store from "./client/src/store";

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
import serialize from 'serialize-javascript';

const TASKS_URL = '/api/tasks';
const APP_STARTED_EVENT = 'APP_STARTED_EVENT';

const TasksController = require('./controllers/TasksController');
const {sequelize} = require('./sequelize');

const app = express();
app.use(bodyParser.json());
app.use(cors());

/**
 * Front
 */
const CLIENT_FILES_PATH = './client/build';
app.use('/static', express.static(`${CLIENT_FILES_PATH}/static`));
app.use('/styles', express.static(`${CLIENT_FILES_PATH}/styles`));
app.get(
  /^\/(?!api).*/,
  (req, res) => {
    fs.readFile(path.resolve(`${CLIENT_FILES_PATH}/index.html`), 'utf8', async (err, data) => {
        if (err) {
            return res.status(500).send();
        }

        let actions = [];
        for (const {route: {component}, match: {params}} of matchRoutes(Routes, req.path)) {
            if (!component.WrappedComponent.onInitActions) {
                continue;
            }
            actions = actions.concat(actions, component.WrappedComponent.onInitActions(params));
        }
        await Promise.all(actions.map(action => action()));

        const content = renderToString(
            <Provider store={store}>
                <div className="ui text container">
                    <h2 className="ui header">TODOs Application</h2>
                    <StaticRouter location={req.path} context={{}}>
                        {renderRoutes(Routes)}
                    </StaticRouter>
                </div>
            </Provider>,
        );

        return res.send(
            data.replace(
                '<div id="root"></div>',
                `
                    <div id="root">${content}</div>
                    <script>
                      window.__PRELOADED_STATE__ = ${serialize(store.getState())}
                    </script>
                `
            )
        );
    })
});

/**
 * API
 */
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