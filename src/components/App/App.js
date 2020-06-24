import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SearchPage from '../SearchPage';
import MoviePage from '../MoviePage';
import ErrorBoundary from '../ErrorBoundary';

import './App.scss';

const propTypes = {
    hasMovieData: PropTypes.bool.isRequired,
};

const App = ({ hasMovieData }) => (
    <ErrorBoundary>
        <div className="app">
            {hasMovieData ? <MoviePage /> : <SearchPage />}
        </div>
    </ErrorBoundary>
);
App.propTypes = propTypes;

const mapStateToProps = (state) => {
    return {
        hasMovieData: !!state.movieData,
    }
};

export default connect(mapStateToProps)(App);
