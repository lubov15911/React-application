import React from 'react';
import PropTypes from 'prop-types';

import './MovieCard.scss';

const MovieCard = (props) => {
    const { movie } = props;

    return (
        <div className="movie-card">
            <img src={movie.poster_path} alt="" className="movie-card-poster"/>
            <div className="movie-card-info">
                <div className="movie-card-info-header">
                    <h1 className="movie-card-info-title">{movie.title}</h1>
                    <div className="movie-card-info-rating"><span>{movie.vote_average}</span></div>
                </div>
                <p className="movie-card-info-tagline">{movie.tagline}</p>
                <div>
                    <span className="movie-card-highlight">{movie.release_date.slice(0, 4)}</span> year
                    <span className="movie-card-highlight">{movie.runtime}</span> min
                </div>
                <p className="movie-card-description">{movie.overview}</p>
            </div>
        </div>
    );
};
MovieCard.propTypes = {
    movie: PropTypes.shape({
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
