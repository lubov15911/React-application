import React, { Component } from 'react';

import ToggleComponent from '../ToggleComponent';
import SearchBar from '../SearchBar';

import './SearchContainer.scss';

const SearchOptions = {
    first: 'Title',
    second: 'Genre'
};

export default class SearchContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
        };
        this.sendSearchRequest = this.sendSearchRequest.bind(this);
    }

    sendSearchRequest(value) {
        if (value === 'error') {
            this.setState({ error: true });
        } else {
            const { handleSearchValue, } = this.props;
            this.setState({ error: false });
            handleSearchValue(value.toLowerCase());
        }
    }

    render() {
        const { error, } = this.state;
        const {
            toggleSearch,
            searchOption,
        } = this.props;

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
                        handleToggle={toggleSearch} />
                </div>
            );
        }
    }
};
