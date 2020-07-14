// @flow

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import SearchContainer from '../SearchContainer';
import MovieCard from '../MovieCard';

import './HeaderContainer.scss';

const HeaderContainer = () => {
    const location = useLocation();
    let renderHeader = null;
    let isMovie = false;

    if (location.pathname.startsWith('/film')) {
        renderHeader = <MovieCard />;
        isMovie = true;
    } else {
        renderHeader = <SearchContainer />;
    }

    return (
        <div className="header-container">
            <div className="buttons-container">
                <Link to="/" className="home-page-btn"><b>netflix</b>roulette</Link>
                {isMovie && <Link to="/" className="home-page-btn">Search icon</Link>}
            </div>
            {renderHeader}
        </div>
    );
};

export default HeaderContainer;
