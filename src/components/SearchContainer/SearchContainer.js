// @flow

import React from 'react';
import { connect } from 'react-redux';
import { createUseStyles } from 'react-jss';

import ToggleComponent from '../ToggleComponent';
import SearchBar from '../SearchBar';

import { SearchOptions } from '../../constants';
import { updateSearchOption } from '../../actions';

const useStyles = createUseStyles({
    searchHeader: {
        display: 'flex',
        flexDirection: 'column',
        margin: '0 6em',
    },
    searchTitle: {
        fontSize: '4em',
        fontWeight: 'normal',
    },
});

const SearchContainer = ({ searchOption, toggleSearchOption, }: {
    searchOption: string,
    toggleSearchOption: (searchOption: string) => void,
}) => {
    const classes = useStyles();
    const handleToggle = ({ currentTarget: { value } }) => {
        toggleSearchOption(value);
    };

    return (
        <div className={classes.searchHeader}>
            <h1 className={classes.searchTitle}>Find your movie</h1>
            <SearchBar />
            <ToggleComponent
                toggleType="Search "
                options={SearchOptions}
                selected={searchOption}
                handleToggle={handleToggle} />
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        searchOption: state.searchOption,
    }
};

export default connect(mapStateToProps, { toggleSearchOption: updateSearchOption })(SearchContainer);
