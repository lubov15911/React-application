import React from 'react';

import './MovieCard.scss';

const MovieCard = (props) => {
    let movie = props.movie;

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

export default MovieCard;
