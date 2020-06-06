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
    } = props;
    return (
        <div className="header-container">
            <div className="buttons-container">
                <HomePageLogoButton handleClick={routeToHomePage} />
                {movieId && <HomePageSearchButton handleClick={routeToHomePage} />}
            </div>
            {!movieId ? <ErrorBoundary><SearchHeader error={error}/></ErrorBoundary> : <MovieCard />}
        </div>
    );
};
HeaderContainer.propTypes = {
    movieId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    // eslint-disable-next-line react/require-default-props
    error: PropTypes.bool,
    routeToHomePage: PropTypes.func.isRequired,
};

export default HeaderContainer;
