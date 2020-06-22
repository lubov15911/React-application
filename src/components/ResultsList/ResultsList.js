import React from 'react';
import PropTypes from 'prop-types';

import EmptyList from '../EmptyList';
import MoviesList from '../MoviesList';

import './ResultsList.scss';

const PROP_TYPES = {
    totalResults: PropTypes.number.isRequired,
    films: PropTypes.arrayOf(PropTypes.object).isRequired,
    raiseClickEvent: PropTypes.func.isRequired,
};

const ResultsList = ({ totalResults, films, raiseClickEvent, }) => {
    return (
        <div className={`search-results ${!totalResults && 'no-items'}`}>
            {totalResults ?
                <MoviesList films={films} raiseClickEvent={raiseClickEvent} /> :
                <EmptyList />
            }
        </div>
    );
};
ResultsList.propTypes = PROP_TYPES;

export default ResultsList;
