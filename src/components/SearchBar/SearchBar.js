import React from 'react';
import PropTypes from 'prop-types';

import './SearchBar.scss';

const PROP_TYPES = {
    handleSubmit: PropTypes.func.isRequired,
    handleSearchValue: PropTypes.func.isRequired,
    searchValue: PropTypes.string.isRequired,
};

const SearchBar = ({ handleSubmit, handleSearchValue, searchValue, }) => {
    const onSubmit = (event) => {
        handleSubmit(searchValue);
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
SearchBar.propTypes = PROP_TYPES;

export default SearchBar;
