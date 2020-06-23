import { SortOptions, SearchOptions } from '../constants';

import FILMS from '../data/films.json';

const initialState = {
    searchOption: SearchOptions.first,
    searchValue: '',
    sortOption: SortOptions.first,
    films: FILMS.data,
    movieData: null,
};

export default initialState;
