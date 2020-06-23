import React from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';

import ToggleComponent from '../ToggleComponent';

import './ResultsHeader.scss';

import { SortOptions } from '../../constants';
import { updateSortOption } from '../../actions';

const propTypes = {
    resultsAmount: PropTypes.number.isRequired,
    sortOption: PropTypes.string.isRequired,
    toggleSortOption: PropTypes.func.isRequired,
};

const ResultsHeader = ({ resultsAmount, sortOption, toggleSortOption, }) => (
    <div className="results-header">
        {resultsAmount && <p><b>{resultsAmount} movie found</b></p>}
        <ToggleComponent
            className="toggle1"
            toggleType='Sort'
            options={SortOptions}
            selected={sortOption}
            handleToggle={toggleSortOption} />
    </div>
);
ResultsHeader.propTypes = propTypes;

const mapStateToProps = (state) => {
    return {
        resultsAmount: state.films.length,
        sortOption: state.sortOption,
    }
};
export default connect(mapStateToProps, { toggleSortOption: updateSortOption })(ResultsHeader);

