import React from 'react';

import { SearchFilter } from "./SearchFilter"; // PureComponent

const SEARCH_PLACEHOLDER = 'Search a movie';
const BTN_PLACEHOLDER = 'Search';

export function SearchPanel () {
    return (
        <div>
            <input type="text" placeholder={SEARCH_PLACEHOLDER} />
            <input type="submit" value={BTN_PLACEHOLDER} />
            <SearchFilter />
        </div>
    );
}
