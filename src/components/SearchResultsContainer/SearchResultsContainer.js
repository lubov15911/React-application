import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import ResultsHeader from '../ResultsHeader';
import ResultsList from '../ResultsList';

const PROP_TYPES = {
    total: PropTypes.number.isRequired,
    films: PropTypes.arrayOf(PropTypes.object).isRequired,
    sortOption: PropTypes.string.isRequired,
    handleSelectMovie: PropTypes.func.isRequired,
    handleSortOption: PropTypes.func.isRequired,
};

const SearchResultsContainer = ({ total, films, handleSelectMovie, handleSortOption, sortOption, }) => (
    <Fragment>
        <ResultsHeader resultsAmount={total} sortOption={sortOption} handleSortOption={handleSortOption} />
        <ResultsList resultsAmount={total} films={films} raiseClickEvent={handleSelectMovie} />
    </Fragment>
);
SearchResultsContainer.propTypes = PROP_TYPES;

export default SearchResultsContainer;

