//Startup point for the client side application
import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'babel-polyfill';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import { renderRoutes } from 'react-router-config';
import axios from 'axios';
import Routes from './Routes';
import reducers from './reducers';


const axiosInstance = axios.create({
    baseURL: '/api',
});


const store = createStore(
    reducers,
    window.INITIAL_STATE,
    applyMiddleware(thunk.withExtraArgument(axiosInstance), logger)
);

ReactDom.hydrate(
    <Provider store={store}>
        <Router>
            <div>{renderRoutes(Routes)}</div>
        </Router>
    </Provider>,
    document.getElementById("root")
);