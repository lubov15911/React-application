import React from 'react';

import './SearchBar.scss';

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    onSubmit(event) {
        console.log("event.target", event.target);
        this.props.handleSubmit(this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form className="search-form" onSubmit={this.onSubmit}>
                <input type="text" placeholder="Search" value={this.state.value} onChange={this.handleChange} />
                <button type="submit"><p>Search</p></button>
            </form>
        );
    }
};
