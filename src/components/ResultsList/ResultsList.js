// @flow

import React from 'react';
import { connect } from 'react-redux';

import EmptyList from '../EmptyList';
import MoviesList from '../MoviesList';

import './ResultsList.scss';

const ResultsList = ({ resultsAmount, }: {
    resultsAmount: number,
}) => {
    return (
        <div className={`search-results ${resultsAmount ? '' : 'no-items'}`}>
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
