import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

import EmptyList from '../EmptyList';
import MoviesList from '../MoviesList';

import './ResultsList.scss';

const propTypes = {
    resultsAmount: PropTypes.number.isRequired,
};

const ResultsList = ({ resultsAmount, }) => {
    return (
        <div className={`search-results ${!resultsAmount && 'no-items'}`}>
            {resultsAmount ? <MoviesList /> : <EmptyList />}
        </div>
    );
};
ResultsList.propTypes = propTypes;

const mapStateToProps = (state) => {
    return {
        resultsAmount: state.films.length,
    }
};
export default connect(mapStateToProps)(ResultsList);
