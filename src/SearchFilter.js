import React, { PureComponent } from 'react';

export class SearchFilter extends PureComponent {
    render() {
        return (
            <div>
                <input type="radio" id="filter-by-title" name="search-filter" value="title" checked />
                <label htmlFor="filter-by-title">Title</label>
                <input type="radio" id="filter-by-genre" name="search-filter" value="genre" />
                <label htmlFor="filter-by-genre">Genre</label>
            </div>
        );
    }
}
