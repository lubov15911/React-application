// @flow

import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import './SearchBar.scss';

import { updateSearchValue } from '../../actions';

const SearchBar = ({ handleSearchValue, searchValue, }: {
    handleSearchValue: (searchValue: string) => void,
    searchValue: string,
}) => {
    const history = useHistory();

    const onSubmit = (event) => {
        event.preventDefault();
        let url = '/search';

        if (searchValue) {
            url += `/${searchValue}`;
        }

        history.push(url);
    };

    const handleChange = ({ target: { value } }) => handleSearchValue(value);

    return (
        <form className="search-form" onSubmit={onSubmit}>
            <input type="text" placeholder="Search" value={searchValue} onChange={handleChange} />
            <button type="submit"><p>Search</p></button>
        </form>
    );
};

const mapStateToProps = state => {
    return {
        searchValue: state.searchValue,
    }
};
export default connect(mapStateToProps, { handleSearchValue: updateSearchValue, })(SearchBar);
