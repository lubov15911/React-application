import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ToggleComponent from '../ToggleComponent';

import './ResultsHeader.scss';

import { SortOptions } from '../../constants';
import { updateSortOption } from '../../actions';

const defaultProps = {
    movieData: null,
};
const propTypes = {
    resultsAmount: PropTypes.number.isRequired,
    sortOption: PropTypes.string.isRequired,
    toggleSortOption: PropTypes.func.isRequired,
    movieData: PropTypes.shape({
        genres: PropTypes.array.isRequired,
    }),
};

const ResultsHeader = ({ movieData, resultsAmount, sortOption, toggleSortOption, }) => (
    <div className="results-header">
        {movieData ? <p>Films by {movieData.genres[0]} genre</p> :
            resultsAmount && <p><b>{resultsAmount} movie found</b></p>}
        <ToggleComponent
            className="toggle1"
            toggleType="Sort"
            options={SortOptions}
            selected={sortOption}
            handleToggle={toggleSortOption} />
    </div>
);
ResultsHeader.defaultProps = defaultProps;
ResultsHeader.propTypes = propTypes;

const mapStateToProps = (state) => {
    return {
        resultsAmount: state.films.length,
        sortOption: state.sortOption,
        movieData: state.movieData,
    }
};
export default connect(mapStateToProps, { toggleSortOption: updateSortOption })(ResultsHeader);

