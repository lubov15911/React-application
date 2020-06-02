import React from 'react';

import EmptyList from "../EmptyList/EmptyList";
import ResultsList from "../ResultsList/ResultsList";

import './SearchResults.scss';

const SearchResults = (props) => {
    return (
        <div className={`search-results ${!props.totalResults && 'no-items'}`}>
            {props.totalResults && <ResultsList films={props.films} raiseClickEvent={props.raiseClickEvent} />}
            {!props.totalResults && <EmptyList />}
        </div>
    );
};
export default SearchResults;
