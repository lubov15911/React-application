import React from 'react';
import PropTypes from 'prop-types';

import SearchContainer from '../SearchContainer';
import MovieCard from '../MovieCard';

import './HeaderContainer.scss';

const HeaderContainer = (props) => {
    const {
        movieData,
        handleSearchValue,
        toggleSearch,
        searchOption,
    } = props;

    return (
        <div className="header-container">
            <div className="buttons-container">
                <a className="home-page-btn" href="."><b>netflix</b>roulette</a>
                {movieData && <a className="home-page-btn" href=".">Search icon</a>}
            </div>
            {movieData ?
                <MovieCard movieData={movieData} /> :
                <SearchContainer
                    handleSearchValue={handleSearchValue}
                    toggleSearch={toggleSearch}
                    searchOption={searchOption} />
            }
        </div>
    );
};
HeaderContainer.defaultProps = {
    movieData: null,
    handleSearchValue: null,
    toggleSearch: null,
    searchOption: null,
};
HeaderContainer.propTypes = {
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
    toggleSearch: PropTypes.func,
    searchOption: PropTypes.string,
};

export default HeaderContainer;
