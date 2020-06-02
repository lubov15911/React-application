import React from 'react';
import PropTypes from 'prop-types';

import ToggleComponent from '../ToggleComponent/ToggleComponent';

import './ResultsHeader.scss';

const SortOptions = {
    first: 'Release date',
    second: 'Rating'
};

export default class ResultsHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sortOption: SortOptions.first
        };
        this.toggleSort = this.toggleSort.bind(this);
    }

    toggleSort() {
        const { sortOption } = this.state;
        const { handleSortOption } = this.props;
        const newValue = (sortOption === SortOptions.first) ? SortOptions.second : SortOptions.first;
        this.setState({ sortOption: newValue });
        handleSortOption(newValue);
    }

    render() {
        const { totalResults } = this.props;
        const { sortOption } = this.state;

        return (
            <div className="results-header">
                {totalResults && <p><b>{totalResults} movie found</b></p>}
                <ToggleComponent
                    className="toggle1"
                    toggleType='Sort'
                    options={SortOptions}
                    selected={sortOption}
                    handleToggle={this.toggleSort} />
            </div>
        );
    }
}
ResultsHeader.propTypes = {
    totalResults: PropTypes.number.isRequired,
    handleSortOption: PropTypes.func.isRequired,
};
