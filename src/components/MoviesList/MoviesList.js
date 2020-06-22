import React from 'react';
import PropTypes from 'prop-types';

import MoviesListItem from '../MoviesListItem';
import './MoviesList.scss'

const PROP_TYPES = {
    films: PropTypes.arrayOf(PropTypes.object).isRequired,
    raiseClickEvent: PropTypes.func.isRequired,
};

const MoviesList = ({ films, raiseClickEvent }) => (
    <ul className="movies-list">
        {films.map(item => {
            return <MoviesListItem movieData={item} key={item.id} raiseClickEvent={raiseClickEvent} />;
        })}
    </ul>
);
MoviesList.propTypes = PROP_TYPES;

export default MoviesList;
