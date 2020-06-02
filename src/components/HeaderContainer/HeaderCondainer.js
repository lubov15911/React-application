import React from 'react';
import PropTypes from 'prop-types';

import HomePageLogoButton from '../HomePageLogoButton/HomePageLogoButton';
import HomePageSearchButton from '../HomePageSearchButton/HomePageSearchButton';
import SearchHeader from '../SearchHeader/SearchHeader';
import MovieCard from '../MovieCard/MovieCard';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import './HeaderContainer.scss';

const HeaderContainer = (props) => {
    const {
        routeToHomePage,
        movieId,
        error,
        movie,
    } = props;
    return (
        <div className="header-container">
            <div className="buttons-container">
                <HomePageLogoButton handleClick={routeToHomePage} />
                {movieId && <HomePageSearchButton handleClick={routeToHomePage} />}
            </div>
            {!movieId ? <ErrorBoundary><SearchHeader error={error}/></ErrorBoundary> : <MovieCard movie={movie}/>}
        </div>
    );
};
HeaderContainer.propTypes = {
    movieId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    // eslint-disable-next-line react/require-default-props
    error: PropTypes.bool,
    // eslint-disable-next-line react/require-default-props
    movie: PropTypes.oneOfType([null, PropTypes.shape({
        poster_path: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        vote_average: PropTypes.number.isRequired,
        release_date: PropTypes.string.isRequired,
        tagline: PropTypes.string.isRequired,
        runtime: PropTypes.number.isRequired,
        overview: PropTypes.string.isRequired,
    })]),
    routeToHomePage: PropTypes.func.isRequired,
};

export default HeaderContainer;
