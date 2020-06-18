import React from 'react';
import PropTypes from 'prop-types';

import MoviesListItem from '../MoviesListItem/MoviesListItem';
import './MoviesList.scss'

const MoviesList = (props) => {
    const {
        films,
        raiseClickEvent
    } = props;

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
