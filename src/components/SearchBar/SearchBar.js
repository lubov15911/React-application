import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import './SearchBar.scss';

import { updateSearchValue } from '../../actions';

const propTypes = {
    handleSearchValue: PropTypes.func.isRequired,
    searchValue: PropTypes.string.isRequired,
};

const SearchBar = ({ handleSearchValue, searchValue, }) => {
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
SearchBar.propTypes = propTypes;

const mapStateToProps = state => {
    return {
        searchValue: state.searchValue,
    }
};
export default connect(mapStateToProps, { handleSearchValue: updateSearchValue, })(SearchBar);
