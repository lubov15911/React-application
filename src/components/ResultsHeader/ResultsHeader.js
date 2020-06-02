import React from 'react';

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
        let newValue = (this.state.sortOption === SortOptions.first) ? SortOptions.second : SortOptions.first;
        this.setState({ sortOption: newValue });
        this.props.handleSortOption(newValue);
    }

    render() {
        return (
            <div className="results-header">
                {this.props.totalResults && <p><b>{this.props.totalResults} movie found</b></p>}
                <ToggleComponent
                    className="toggle1"
                    toggleType='Sort'
                    options={SortOptions}
                    selected={this.state.sortOption}
                    handleToggle={this.toggleSort} />
            </div>
        );
    }
}
