import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ToggleComponent from '../ToggleComponent';
import SearchBar from '../SearchBar';

import './SearchContainer.scss';

import { SearchOptions } from '../../constants';
import { asyncGetMovies, updateSearchOption } from '../../actions';

const propTypes = {
    searchOption: PropTypes.string.isRequired,
    searchValue: PropTypes.string.isRequired,
    toggleSearchOption: PropTypes.func.isRequired,
    requestData: PropTypes.func.isRequired,
};

const SearchContainer = ({ searchOption, searchValue, toggleSearchOption, requestData }) => {
    const handleToggle = ({ currentTarget: { value } }) => {
        toggleSearchOption(value);
        requestData(searchValue, value);
    };

    return (
        <div className="search-header">
            <h1 className="search-title">Find your movie</h1>
            <SearchBar />
            <ToggleComponent
                toggleType="Search "
                options={SearchOptions}
                selected={searchOption}
                handleToggle={handleToggle}/>
        </div>
    )
};
SearchContainer.propTypes = propTypes;

const mapStateToProps = (state) => {
    return {
        searchOption: state.searchOption,
        searchValue: state.searchValue,
    }
};

export default connect(mapStateToProps, { toggleSearchOption: updateSearchOption, requestData: asyncGetMovies })(SearchContainer);
