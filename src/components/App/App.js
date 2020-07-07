import React from 'react';
import {
    Switch,
    Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import ErrorBoundary from '../ErrorBoundary';
import SearchPage from '../SearchPage';
import MoviePage from '../MoviePage';
import EmptyPage from '../EmptyPage';
import NotFound from '../NotFound';

import './App.scss';

const defaultProps = {
    location: null,
    context: null,
};
const propTypes = {
    Router: PropTypes.func.isRequired,
    location: PropTypes.string,
    context: PropTypes.shape({
        url: PropTypes.string,
    }),
    store: PropTypes.shape({
        dispatch: PropTypes.func.isRequired,
        getState: PropTypes.func.isRequired,
    }).isRequired,
};

const App = ({ Router, location, context, store, }) => (
    <Provider store={store}>
        <Router location={location} context={context}>
            <ErrorBoundary>
                <div className="app">
                    <Switch >
                        <Route path="/search" component={SearchPage} />
                        <Route path="/film/:id" component={MoviePage} />
                        <Route exact path="/" component={EmptyPage} />
                        <Route path="*" component={NotFound} />
                    </Switch>
                </div>
            </ErrorBoundary>
        </Router>
    </Provider>
);
App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App;
