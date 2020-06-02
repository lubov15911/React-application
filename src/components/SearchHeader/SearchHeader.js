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
            searchOption: SearchOptions.first,
            error: false
        };
        this.toggleSearch = this.toggleSearch.bind(this);
        this.sendSearchRequest = this.sendSearchRequest.bind(this);
    }

    toggleSearch() {
        const {
            searchOption
        } = this.state;
        const newValue = (searchOption === SearchOptions.first) ? SearchOptions.second : SearchOptions.first;
        this.setState({ searchOption: newValue });
    }

    sendSearchRequest(value) {
        // eslint-disable-next-line no-console
        console.log('Send Search Request', value);
        if (value === 'error') {
            this.setState({ error: true });
        } else {
            this.setState({ error: false });
        }
    }

    render() {
        const {
            searchOption,
            error,
        } = this.state;

        if (error) {
            throw new Error('I crashed!');
        } else {
            return (
                <div className="search-header">
                    <h1 className="search-title">Find your movie</h1>
                    <SearchBar handleSubmit={this.sendSearchRequest} />
                    <ToggleComponent
                        toggleType='Search'
                        options={SearchOptions}
                        selected={searchOption}
                        handleToggle={this.toggleSearch} />
                </div>
            );
        }
    }
};
