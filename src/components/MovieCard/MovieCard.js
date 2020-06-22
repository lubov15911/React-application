import React from 'react';
import PropTypes from 'prop-types';

import './MovieCard.scss';

const PROP_TYPES = {
    movieData: PropTypes.shape({
        poster_path: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        vote_average: PropTypes.number.isRequired,
        release_date: PropTypes.string.isRequired,
        tagline: PropTypes.string.isRequired,
        runtime: PropTypes.number.isRequired,
        overview: PropTypes.string.isRequired,
    }).isRequired,
};

const MovieCard = ({ movieData, }) => {
    const { poster_path, title, vote_average, tagline, release_date, runtime, overview, } = movieData;

    return (
        <div className="movie-card">
            <img src={poster_path} alt="" className="movie-card-poster"/>
            <div className="movie-card-info">
                <div className="movie-card-info-header">
                    <h1 className="movie-card-info-title">{title}</h1>
                    <div className="movie-card-info-rating"><span>{vote_average}</span></div>
                </div>
                <p className="movie-card-info-tagline">{tagline}</p>
                <div>
                    <span className="movie-card-highlight">{release_date.slice(0, 4)}</span> year
                    <span className="movie-card-highlight">{runtime}</span> min
                </div>
                <p className="movie-card-description">{overview}</p>
            </div>
        </div>
    );
};
MovieCard.propTypes = PROP_TYPES;

export default MovieCard;
