import {
    createStore,
    applyMiddleware,
    combineReducers,
} from 'redux';
import thunk from 'redux-thunk';

import TasksReducer from './reducers/TasksReducer';

let preloadedState = null;
if (typeof window !== 'undefined') {
  // Grab the state from a global variable injected into the server-generated HTML
  preloadedState = window.__PRELOADED_STATE__;
  // Allow the passed state to be garbage-collected
  delete window.__PRELOADED_STATE__;
}

const reducers = combineReducers({
  tasks: TasksReducer,
});
const middleware = applyMiddleware(thunk);

const store = preloadedState !== null
  ? createStore(reducers, preloadedState, middleware)
  : createStore(reducers, middleware);

export default store;