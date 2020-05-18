import React, { PureComponent } from 'react';

const SEARCH_PLACEHOLDER = 'Search a movie';
const BTN_PLACEHOLDER = 'Search';

class SearchFilter extends PureComponent {
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

export function SearchPanel () {
    return (
        <div>
            <input type="text" placeholder={SEARCH_PLACEHOLDER} />
            <input type="submit" value={BTN_PLACEHOLDER} />
            <SearchFilter />
        </div>
    );
}
