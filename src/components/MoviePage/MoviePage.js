import React from 'react';
import PropTypes from 'prop-types';

import MoviePageHeader from '../MoviePageHeader/MoviePageHeader';

export default class MoviePage extends React.PureComponent {
    render() {
        const {
            movieId,
            routeToHomePage,
        } = this.props;

        return (
            <MoviePageHeader
                movieId={movieId}
                routeToHomePage={routeToHomePage}
            />
        );
    }
};
MoviePage.propTypes = {
    movieId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    routeToHomePage: PropTypes.func.isRequired,
};
