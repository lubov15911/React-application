import React, { Component } from 'react';

import Sum from './TestComponent'; // Component for test

export default class SearchResults extends Component {
    render() {
        return (
            <div>
              <p>{Sum(11, 6)} movies found</p>
              <p>Sort by</p>
            </div>
        );
    }
}
