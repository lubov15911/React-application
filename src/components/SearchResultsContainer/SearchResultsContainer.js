import React from 'react';

import ResultsHeader from '../ResultsHeader/ResultsHeader';
import SearchResults from '../SearchResults/SearchResults';

export default class SearchResultsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sortBy: ''
        };
        this.updateSortOption = this.updateSortOption.bind(this);
    }

    updateSortOption(newValue) {
        this.setState({ sortBy: newValue });
    }

    render() {
        return (
            <div>
                <ResultsHeader totalResults={this.props.total} handleSortOption={this.updateSortOption} />
                <SearchResults totalResults={this.props.total} films={this.props.films} raiseClickEvent={this.props.raiseClickEvent}/>
            </div>
        );
    }
}
