import React from 'react';
import PropTypes from 'prop-types';

import EmptyList from '../EmptyList/EmptyList';
import ResultsList from '../ResultsList/ResultsList';

import './SearchResults.scss';

const SearchResults = (props) => {
    const {
        totalResults,
        films,
        raiseClickEvent,
    } = props;

    return (
        <div className={`search-results ${!totalResults && 'no-items'}`}>
            {totalResults && <ResultsList films={films} raiseClickEvent={raiseClickEvent} />}
            {!totalResults && <EmptyList />}
        </div>
    );
};
SearchResults.propTypes = {
    totalResults: PropTypes.number.isRequired,
    films: PropTypes.arrayOf(PropTypes.object).isRequired,
    raiseClickEvent: PropTypes.func.isRequired,
};

export default SearchResults;
