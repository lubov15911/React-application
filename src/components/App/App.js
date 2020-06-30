import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

import ErrorBoundary from '../ErrorBoundary';
import SearchPage from '../SearchPage';
import MoviePage from '../MoviePage';
import EmptyPage from '../EmptyPage';
import NotFound from '../NotFound';

import './App.scss';

const App = () => (
    <Router>
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
);

export default App;
