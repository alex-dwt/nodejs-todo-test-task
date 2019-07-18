import React from 'react';
import {
    createStore,
    applyMiddleware,
    combineReducers,
} from 'redux';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import 'semantic-ui-css/semantic.min.css'

import TasksReducer from './reducers/TasksReducer';
import {TasksListScreen} from "./screens/TasksListScreen";
import {TasksViewOneScreen} from "./screens/TasksViewOneScreen";
import {TasksCreateScreen} from "./screens/TasksCreateScreen";
import {TasksEditScreen} from "./screens/TasksEditScreen";

function App() {
  return (
      <Provider store={store}>
          <div className="ui text container">
              <h2 className="ui header">TODOs Application</h2>
              <Router>
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
              </Router>
          </div>
      </Provider>
  );
}

const store = createStore(
    combineReducers({
        tasks: TasksReducer,
    }),
    applyMiddleware(thunk)
);

export {
    App,
    store,
};
