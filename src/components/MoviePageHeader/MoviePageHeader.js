import React from 'react';
import PropTypes from 'prop-types';

import HomePageLogoButton from '../HomePageLogoButton/HomePageLogoButton';
import HomePageSearchButton from '../HomePageSearchButton/HomePageSearchButton';
import MovieCard from '../MovieCard/MovieCard';

import './MoviePageHeader.scss';

const MoviePageHeader = (props) => {
    const { routeToHomePage } = props;

    return (
        <div className="movie-container ">
            <div className="buttons-container">
                <HomePageLogoButton handleClick={routeToHomePage} />
                <HomePageSearchButton handleClick={routeToHomePage} />
            </div>
            <MovieCard />
        </div>
    );
};
MoviePageHeader.propTypes = {
    routeToHomePage: PropTypes.func.isRequired,
};

export default MoviePageHeader;
