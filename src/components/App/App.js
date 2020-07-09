// @flow

import React from 'react';
import {
    Switch,
    Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';

import ErrorBoundary from '../ErrorBoundary';
import SearchPage from '../SearchPage';
import MoviePage from '../MoviePage';
import EmptyPage from '../EmptyPage';
import NotFound from '../NotFound';

import './App.scss';

const App = ({ Router, location, context, store, }: {
    Router: any,
    location: ?string,
    context: ?{
        url: ?string,
    },
    store: {
        dispatch: any,
        getState: any,
    },
}) => (
    <Provider store={store}>
        <Router location={location} context={context}>
            <ErrorBoundary>
                <div className="app">
                    <Switch >
                        <Route path="/search/:value" component={SearchPage} />
                        <Route path="/film/:id" component={MoviePage} />
                        <Route exact path="/" component={EmptyPage} />
                        <Route path="*" component={NotFound} />
                    </Switch>
                </div>
            </ErrorBoundary>
        </Router>
    </Provider>
);

export default App;
