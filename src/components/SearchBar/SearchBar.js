// @flow

import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createUseStyles } from 'react-jss';

import * as Colors from '../../constants/colors';

import { updateSearchValue } from '../../actions';

const useStyles = createUseStyles({
    searchForm: {
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',
    },
    searchFormElements: {
        height: '2.8em',
        borderRadius: 4,
        border: 'none',
        color: 'inherit',
        boxSizing: 'border-box',
        fontSize: '2em',
    },
    searchFormInput: {
        composes: '$searchFormElements',
        opacity: 0.7,
        backgroundColor: Colors.TransparentDarkGray,
        marginRight: '1em',
        padding: '0 0.7em',
    },
    searchFormBtn: {
        composes: '$searchFormElements',
        backgroundColor: Colors.Pink,
        cursor: 'pointer',
    },
});

const SearchBar = ({ handleSearchValue, searchValue, }: {
    handleSearchValue: (searchValue: string) => void,
    searchValue: string,
}) => {
    const classes = useStyles();
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
        <form className={classes.searchForm} onSubmit={onSubmit}>
            <input className={classes.searchFormInput} type="text" placeholder="Search" value={searchValue} onChange={handleChange} />
            <button className={classes.searchFormBtn} type="submit"><p>Search</p></button>
        </form>
    );
};

const mapStateToProps = state => {
    return {
        searchValue: state.searchValue,
    }
};
export default connect(mapStateToProps, { handleSearchValue: updateSearchValue, })(SearchBar);
