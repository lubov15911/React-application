// @flow

import React from 'react';
import { connect } from 'react-redux';
import { createUseStyles } from 'react-jss';

import EmptyList from '../EmptyList';
import MoviesList from '../MoviesList';

const useStyles = createUseStyles({
    searchResults: {
        padding: '6em',
        minHeight: '55.5em',
    },
    noItems: {
        composes: '$searchResults',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

const ResultsList = ({ resultsAmount, }: {
    resultsAmount: number,
}) => {
    const classes = useStyles();

    return (
        <div className={`${classes.searchResults} ${resultsAmount ? '' : classes.noItems}`}>
            {resultsAmount ? <MoviesList /> : <EmptyList />}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        resultsAmount: state.films.length,
    }
};
export default connect(mapStateToProps)(ResultsList);
