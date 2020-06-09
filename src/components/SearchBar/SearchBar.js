import React from 'react';
import PropTypes from 'prop-types';

import './SearchBar.scss';

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        const { handleSubmit } = this.props;
        const { value } = this.state;

        handleSubmit(value);
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        const { value } = this.state;
        return (
            <form className="search-form" onSubmit={this.onSubmit}>
                <input type="text" placeholder="Search" value={value} onChange={this.handleChange} />
                <button type="submit"><p>Search</p></button>
            </form>
        );
    }
};
SearchBar.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
};
