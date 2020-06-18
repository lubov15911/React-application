import React from 'react';
import PropTypes from 'prop-types';

import EmptyList from '../EmptyList/EmptyList';
import MoviesList from '../MoviesList/MoviesList';

import './ResultsList.scss';

const ResultsList = (props) => {
    const {
        totalResults,
        films,
        raiseClickEvent,
    } = props;

    return (
        <div className={`search-results ${!totalResults && 'no-items'}`}>
            {totalResults ?
                <MoviesList films={films} raiseClickEvent={raiseClickEvent} /> :
                <EmptyList />
            }
        </div>
    );
};
ResultsList.propTypes = {
    totalResults: PropTypes.number.isRequired,
    films: PropTypes.arrayOf(PropTypes.object).isRequired,
    raiseClickEvent: PropTypes.func.isRequired,
};

export default ResultsList;
