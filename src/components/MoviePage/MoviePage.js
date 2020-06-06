import React from 'react';
import PropTypes from 'prop-types';

import MoviePageHeader from '../MoviePageHeader/MoviePageHeader';
import SearchResultsContainer from '../SearchResultsContainer/SearchResultsContainer';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

export default class MoviePage extends React.PureComponent {
    render() {
        const {
            movieId,
            films,
            routeToHomePage,
            goToMoviePage,
        } = this.props;

        return (
            <>
                <MoviePageHeader
                    movieId={movieId}
                    routeToHomePage={routeToHomePage}
                />
                <ErrorBoundary>
                    <SearchResultsContainer
                        total={films.length}
                        films={films}
                        raiseClickEvent={goToMoviePage}
                    />
                </ErrorBoundary>
            </>
        );
    }
};
MoviePage.propTypes = {
    movieId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    films: PropTypes.arrayOf(PropTypes.object).isRequired,
    routeToHomePage: PropTypes.func.isRequired,
    goToMoviePage: PropTypes.func.isRequired,
};
