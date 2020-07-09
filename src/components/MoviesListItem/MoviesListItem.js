// @flow

import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import './MoviesListItem.scss';

const MoviesListItem = ({ movieData, }: {
    movieData: {
        id: number,
        poster_path: string,
        title: string,
        release_date: string,
        genres: string[],
    },
}) => {
    const history = useHistory();

    const handleClick = () => {
        history.push(`/film/${movieData.id}`);
    };

    return (
        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
        <li className="movie-preview" onClick={handleClick} onKeyPress={handleClick}>
            <img src={movieData.poster_path} alt="" className="movie-preview-poster"/>
            <div className="movie-preview-header">
                <p>{movieData.title}</p>
                <div className="movie-preview-year"><span>{movieData.release_date.slice(0, 4)}</span></div>
            </div>
            <span className="movie-preview-genre">{movieData.genres.join(', ')}</span>
        </li>
    );
};

export default connect(null)(MoviesListItem);
