import React from 'react';

import MovieContext from '../MovieContext';

import './MovieCard.scss';

const MovieCard = () => (
    <MovieContext.Consumer>
        {value => (
            <div className="movie-card">
                <img src={value.poster_path} alt="" className="movie-card-poster"/>
                <div className="movie-card-info">
                    <div className="movie-card-info-header">
                        <h1 className="movie-card-info-title">{value.title}</h1>
                        <div className="movie-card-info-rating"><span>{value.vote_average}</span></div>
                    </div>
                    <p className="movie-card-info-tagline">{value.tagline}</p>
                    <div>
                        <span className="movie-card-highlight">{value.release_date.slice(0, 4)}</span> year
                        <span className="movie-card-highlight">{value.runtime}</span> min
                    </div>
                    <p className="movie-card-description">{value.overview}</p>
                </div>
            </div>
        )}
    </MovieContext.Consumer>
);

export default MovieCard;
