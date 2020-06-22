import React from 'react';
import PropTypes from 'prop-types';

import MoviesListItem from '../MoviesListItem';
import './MoviesList.scss'

const MoviesList = ({ films, raiseClickEvent }) => {
    return (
        <ul className="movies-list">
            {films.map(item => {
                return <MoviesListItem movieData={item} key={item.id} raiseClickEvent={raiseClickEvent} />;
            })}
        </ul>
    );
};
MoviesList.propTypes = {
    films: PropTypes.arrayOf(PropTypes.object).isRequired,
    raiseClickEvent: PropTypes.func.isRequired,
};

export default MoviesList;
