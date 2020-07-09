// @flow

import React from 'react';
import { connect } from 'react-redux';

import ToggleComponent from '../ToggleComponent';
import SearchBar from '../SearchBar';

import './SearchContainer.scss';

import { SearchOptions } from '../../constants';
import { updateSearchOption } from '../../actions';

const SearchContainer = ({ searchOption, toggleSearchOption, }: {
    searchOption: string,
    toggleSearchOption: (searchOption: string) => void,
}) => {
    const handleToggle = ({ currentTarget: { value } }) => {
        toggleSearchOption(value);
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

const mapStateToProps = (state) => {
    return {
        searchOption: state.searchOption,
    }
};

export default connect(mapStateToProps, { toggleSearchOption: updateSearchOption })(SearchContainer);
