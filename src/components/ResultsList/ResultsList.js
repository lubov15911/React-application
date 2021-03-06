import React from 'react';
import PropTypes from 'prop-types';

import EmptyList from '../EmptyList';
import MoviesList from '../MoviesList';

import './ResultsList.scss';

const PROP_TYPES = {
    resultsAmount: PropTypes.number.isRequired,
    films: PropTypes.arrayOf(PropTypes.object).isRequired,
    raiseClickEvent: PropTypes.func.isRequired,
};

const ResultsList = ({ resultsAmount, films, raiseClickEvent, }) => {
    return (
        <div className={`search-results ${!resultsAmount && 'no-items'}`}>
            {resultsAmount ?
                <MoviesList films={films} raiseClickEvent={raiseClickEvent} /> :
                <EmptyList />
            }
        </div>
    );
};
ResultsList.propTypes = PROP_TYPES;

export default ResultsList;
