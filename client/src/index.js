import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
} from 'react-router-dom'
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import 'semantic-ui-css/semantic.min.css'

import store from './store';
import Routes from './routes';

ReactDOM.render(
    <Provider store={store}>
        <div className="ui text container">
            <h2 className="ui header">TODOs Application</h2>
            <Router>
                {renderRoutes(Routes)}
            </Router>
        </div>
    </Provider>,
    document.getElementById('root')
);