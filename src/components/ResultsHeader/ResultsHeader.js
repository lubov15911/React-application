import React from 'react';
import PropTypes from 'prop-types';

import ToggleComponent from '../ToggleComponent';

import './ResultsHeader.scss';

import { SortOptions } from '../../constants';

const PROP_TYPES = {
    resultsAmount: PropTypes.number.isRequired,
    handleSortOption: PropTypes.func.isRequired,
    sortOption: PropTypes.string.isRequired,
};

const ResultsHeader = ({ resultsAmount, sortOption, handleSortOption, }) => (
    <div className="results-header">
        {resultsAmount && <p><b>{resultsAmount} movie found</b></p>}
        <ToggleComponent
            className="toggle1"
            toggleType='Sort'
            options={SortOptions}
            selected={sortOption}
            handleToggle={handleSortOption} />
    </div>
);
ResultsHeader.propTypes = PROP_TYPES;

export default ResultsHeader;
