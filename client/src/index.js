import React from 'react';
import ReactDOM from 'react-dom';
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

import Routes from './routes';

const store = createStore(
    combineReducers({
        tasks: TasksReducer,
    }),
    applyMiddleware(thunk)
);

ReactDOM.render(
    <Provider store={store}>
        <div className="ui text container">
            <h2 className="ui header">TODOs Application</h2>
            <Router>
                <Routes/>
            </Router>
        </div>
    </Provider>,
    document.getElementById('root')
);

export {
    store,
};