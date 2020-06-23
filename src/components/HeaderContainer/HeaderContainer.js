import React from 'react';
import PropTypes from 'prop-types';

import SearchContainer from '../SearchContainer';
import MovieCard from '../MovieCard';

import './HeaderContainer.scss';

const DEFAULT_PROPS = {
    movieData: null,
    handleSearchValue: null,
    handleToggleSearchCriteria: null,
    handleSearchSubmit: null,
    searchOption: null,
    searchValue: null,
};
const PROP_TYPES = {
    movieData: PropTypes.shape({
        poster_path: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        vote_average: PropTypes.number.isRequired,
        release_date: PropTypes.string.isRequired,
        tagline: PropTypes.string.isRequired,
        runtime: PropTypes.number.isRequired,
        overview: PropTypes.string.isRequired,
    }),
    handleSearchValue: PropTypes.func,
    handleToggleSearchCriteria: PropTypes.func,
    handleSearchSubmit: PropTypes.func,
    searchOption: PropTypes.string,
    searchValue: PropTypes.string,
};

const HeaderContainer = ({ movieData, handleSearchValue, handleToggleSearchCriteria, searchOption, searchValue, handleSearchSubmit, }) => (
    <div className="header-container">
        <div className="buttons-container">
            <a className="home-page-btn" href="."><b>netflix</b>roulette</a>
            {movieData && <a className="home-page-btn" href=".">Search icon</a>}
        </div>
        {movieData ? <MovieCard movieData={movieData} /> :
            <SearchContainer
                handleSearchValue={handleSearchValue}
                handleSearchSubmit={handleSearchSubmit}
                toggleSearch={handleToggleSearchCriteria}
                searchOption={searchOption}
                searchValue={searchValue} />}
    </div>
);
HeaderContainer.defaultProps = DEFAULT_PROPS;
HeaderContainer.propTypes = PROP_TYPES;

export default HeaderContainer;
