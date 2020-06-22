import React from 'react';
import PropTypes from 'prop-types';

import './MoviesListItem.scss';

const MoviesListItem = ({ movieData, raiseClickEvent, }) => {
    function handleClick() {
        raiseClickEvent(movieData.id);
    }

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
MoviesListItem.propTypes = {
    // eslint-disable-next-line react/require-default-props
    movieData: PropTypes.shape({
        id: PropTypes.number.isRequired,
        poster_path: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        release_date: PropTypes.string.isRequired,
        genres: PropTypes.array.isRequired,
    }),
    raiseClickEvent: PropTypes.func.isRequired,
};

export default MoviesListItem;
