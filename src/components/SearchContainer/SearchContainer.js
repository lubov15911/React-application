import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ToggleComponent from '../ToggleComponent';
import SearchBar from '../SearchBar';

import './SearchContainer.scss';

import { SearchOptions } from '../../constants';

export default class SearchContainer extends Component {
    static propTypes = {
        toggleSearch: PropTypes.func.isRequired,
        searchOption: PropTypes.string.isRequired,
        searchValue: PropTypes.string.isRequired,
        handleSearchValue: PropTypes.func.isRequired,
        handleSearchSubmit: PropTypes.func.isRequired,
    };

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
            const { handleSearchSubmit, } = this.props;
            this.setState({ error: false });
            handleSearchSubmit(value.toLowerCase());
        }
    }

    render() {
        const { error, } = this.state;
        const {
            toggleSearch,
            searchOption,
            searchValue,
            handleSearchValue,
        } = this.props;

        if (error) {
            throw new Error('I crashed!');
        } else {
            return (
                <div className="search-header">
                    <h1 className="search-title">Find your movie</h1>
                    <SearchBar
                        handleSearchValue={handleSearchValue}
                        handleSubmit={this.sendSearchRequest}
                        searchValue={searchValue} />
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
