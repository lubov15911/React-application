import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ToggleComponent from '../ToggleComponent';
import SearchBar from '../SearchBar';

import './SearchContainer.scss';

import { SearchOptions } from '../../constants';
import {updateSearchOption, updateSearchValue, submitSearchRequest} from "../../actions";

const propTypes = {
    searchOption: PropTypes.string.isRequired,
    searchValue: PropTypes.string.isRequired,
    toggleSearchOption: PropTypes.func.isRequired,
    handleSearchValue: PropTypes.func.isRequired,
    sendSearchRequest: PropTypes.func.isRequired,
};

const SearchContainer = ({ searchValue, searchOption, toggleSearchOption, handleSearchValue, sendSearchRequest }) => (
    <div className="search-header">
        <h1 className="search-title">Find your movie</h1>
        <SearchBar
            handleSearchValue={handleSearchValue}
            handleSubmit={sendSearchRequest}
            searchValue={searchValue} />
        <ToggleComponent
            toggleType='Search'
            options={SearchOptions}
            selected={searchOption}
            handleToggle={toggleSearchOption} />
    </div>
);
SearchContainer.propTypes = propTypes;

const mapStateToProps = (state) => {
    return {
        searchOption: state.searchOption,
        searchValue: state.searchValue,
    }
};
export default connect(mapStateToProps, { toggleSearchOption: updateSearchOption, handleSearchValue: updateSearchValue, sendSearchRequest: submitSearchRequest })(SearchContainer);
