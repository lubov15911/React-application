import React from 'react';

import HomePageLogoButton from '../HomePageLogoButton/HomePageLogoButton';
import HomePageSearchButton from '../HomePageSearchButton/HomePageSearchButton';
import SearchHeader from '../SearchHeader/SearchHeader';
import MovieCard from '../MovieCard/MovieCard';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import './HeaderContainer.scss';

const HeaderContainer = (props) => {
    return (
        <div className="header-container">
            <div className="buttons-container">
                <HomePageLogoButton handleClick={props.routeToHomePage} />
                {props.movieId && <HomePageSearchButton handleClick={props.routeToHomePage} />}
            </div>
            {!props.movieId ? <ErrorBoundary><SearchHeader error={props.error}/></ErrorBoundary> : <MovieCard movie={props.movie}/>}
        </div>
    );
};
export default HeaderContainer;
