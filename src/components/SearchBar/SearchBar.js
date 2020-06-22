import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './SearchBar.scss';

export default class SearchBar extends Component {
    static propTypes = {
        handleSubmit: PropTypes.func.isRequired,
        handleSearchValue: PropTypes.func.isRequired,
        searchValue: PropTypes.string.isRequired,
    };

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        const { handleSubmit, searchValue } = this.props;

        handleSubmit(searchValue);
        event.preventDefault();
    }


    handleChange({ target: { value } }) {
        const { handleSearchValue, } = this.props;

        handleSearchValue(value);
    }

    render() {
        const { searchValue, } = this.props;
        return (
            <form className="search-form" onSubmit={this.onSubmit}>
                <input type="text" placeholder="Search" value={searchValue} onChange={this.handleChange} />
                <button type="submit"><p>Search</p></button>
            </form>
        );
    }
};
