import React from 'react';
import {
    Route,
} from 'react-router-dom'

import {TasksListScreen} from "./screens/TasksListScreen";
import {TasksViewOneScreen} from "./screens/TasksViewOneScreen";
import {TasksCreateScreen} from "./screens/TasksCreateScreen";
import {TasksEditScreen} from "./screens/TasksEditScreen";

export default () => (
    <div>
        <Route
            exact
            path="/"
            component={TasksListScreen}
        />
        <Route
            exact
            path="/view/:id"
            component={TasksViewOneScreen}
        />
        <Route
            exact
            path="/add"
            component={TasksCreateScreen}
        />
        <Route
            exact
            path="/edit/:id"
            component={TasksEditScreen}
        />
    </div>
);