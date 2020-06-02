import React from 'react';

import ToggleComponent from '../ToggleComponent/ToggleComponent';
import SearchBar from '../SearchBar/SearchBar';
import './SearchHeader.scss';

const SearchOptions = {
    first: 'Title',
    second: 'Genre'
};

export default class SearchHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchOption: SearchOptions.first
        };
        this.toggleSearch = this.toggleSearch.bind(this);
        this.sendSearchRequest = this.sendSearchRequest.bind(this);
    }

    toggleSearch() {
        let newValue = (this.state.searchOption === SearchOptions.first) ? SearchOptions.second : SearchOptions.first;
        this.setState({ searchOption: newValue });
    }

    sendSearchRequest(value) {
        console.log('Send Search Request', value);
    }

    render() {
        return (
            <div className="search-bar">
                <h1 className="search-title">Find your movie</h1>
                <SearchBar handleSubmit={this.sendSearchRequest} />
                <ToggleComponent
                    toggleType='Search'
                    options={SearchOptions}
                    selected={this.state.searchOption}
                    handleToggle={this.toggleSearch} />
            </div>
        );
    }
};
