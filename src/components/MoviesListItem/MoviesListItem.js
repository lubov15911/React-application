import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import './MoviesListItem.scss';

const propTypes = {
    movieData: PropTypes.shape({
        id: PropTypes.number.isRequired,
        poster_path: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        release_date: PropTypes.string.isRequired,
        genres: PropTypes.array.isRequired,
    }).isRequired,
};

const MoviesListItem = ({ movieData }) => {
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
MoviesListItem.propTypes = propTypes;

export default connect(null)(MoviesListItem);
