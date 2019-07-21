import {
    createStore,
    applyMiddleware,
    combineReducers,
} from 'redux';
import thunk from 'redux-thunk';

import TasksReducer from './reducers/TasksReducer';

export default createStore(
    combineReducers({
        tasks: TasksReducer,
    }),
    applyMiddleware(thunk)
);