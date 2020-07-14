// @flow

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import './MovieCard.scss';

import { asyncGetMovieData } from '../../actions';

const MovieCard = ({ movieData, getMovieData, }: {
    movieData: {
        poster_path: string,
        title: string,
        vote_average: number,
        release_date: string,
        tagline: string,
        runtime: ?number,
        overview: string,
    },
    getMovieData: (id: number) => void,
}) => {
    const { id } = useParams();

    useEffect(() => {
        getMovieData(id);
    });

    if (movieData) {
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
                        {runtime &&(<span className="movie-card-highlight">{runtime}</span>)}
                        {runtime && 'min'}
                    </div>
                    <p className="movie-card-description">{overview}</p>
                </div>
            </div>
        );
    }
    return (
        <div className="movie-card">
            <div className="movie-card-info">
                Loading
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        movieData: state.movieData,
    }
};
export default connect(mapStateToProps, { getMovieData: asyncGetMovieData })(MovieCard);
