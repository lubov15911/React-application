import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SearchContainer from '../SearchContainer';
import MovieCard from '../MovieCard';

import './HeaderContainer.scss';

const defaultProps = {
    movieData: null,
};
const propTypes = {
    movieData: PropTypes.shape({
        poster_path: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        vote_average: PropTypes.number.isRequired,
        release_date: PropTypes.string.isRequired,
        tagline: PropTypes.string.isRequired,
        runtime: PropTypes.number,
        overview: PropTypes.string.isRequired,
    }),
};

const HeaderContainer = ({ movieData, }) => (
    <div className="header-container">
        <div className="buttons-container">
            <a className="home-page-btn" href="."><b>netflix</b>roulette</a>
            {movieData && <a className="home-page-btn" href=".">Search icon</a>}
        </div>
        {movieData ? <MovieCard /> : <SearchContainer  />}
    </div>
);
HeaderContainer.defaultProps = defaultProps;
HeaderContainer.propTypes = propTypes;

const mapStateToProps = (state) => {
    return {
        movieData: state.movieData,
    }
};

export default connect(mapStateToProps)(HeaderContainer);
