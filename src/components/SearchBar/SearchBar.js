import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './SearchBar.scss';

import { asyncGetMovies, updateSearchValue } from '../../actions';

const propTypes = {
    sendSearchRequest: PropTypes.func.isRequired,
    handleSearchValue: PropTypes.func.isRequired,
    searchValue: PropTypes.string.isRequired,
    searchOption: PropTypes.string.isRequired,
    sortOption: PropTypes.string.isRequired,
};

const SearchBar = ({ sendSearchRequest, handleSearchValue, searchValue, searchOption, sortOption, }) => {
    const onSubmit = (event) => {
        sendSearchRequest(searchValue, searchOption, sortOption);
        event.preventDefault();
    };

    const handleChange = ({ target: { value } }) => handleSearchValue(value);

    return (
        <form className="search-form" onSubmit={onSubmit}>
            <input type="text" placeholder="Search" value={searchValue} onChange={handleChange} />
            <button type="submit"><p>Search</p></button>
        </form>
    );
};
SearchBar.propTypes = propTypes;

const mapStateToProps = state => {
    return {
        searchOption: state.searchOption,
        sortOption: state.sortOption,
        searchValue: state.searchValue,
    }
};
export default connect(mapStateToProps, { handleSearchValue: updateSearchValue, sendSearchRequest: asyncGetMovies })(SearchBar);

