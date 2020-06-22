import React from 'react';
import PropTypes from 'prop-types';

import './MovieCard.scss';

const MovieCard = ({ movieData, }) => {
    return (
        <div className="movie-card">
            <img src={movieData.poster_path} alt="" className="movie-card-poster"/>
            <div className="movie-card-info">
                <div className="movie-card-info-header">
                    <h1 className="movie-card-info-title">{movieData.title}</h1>
                    <div className="movie-card-info-rating"><span>{movieData.vote_average}</span></div>
                </div>
                <p className="movie-card-info-tagline">{movieData.tagline}</p>
                <div>
                    <span className="movie-card-highlight">{movieData.release_date.slice(0, 4)}</span> year
                    <span className="movie-card-highlight">{movieData.runtime}</span> min
                </div>
                <p className="movie-card-description">{movieData.overview}</p>
            </div>
        </div>
    );
};
MovieCard.propTypes = {
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

export default MovieCard;
