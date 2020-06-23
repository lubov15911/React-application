import { SortOptions, SearchOptions } from '../constants';

const initialState = {
    searchOption: SearchOptions.first,
    searchValue: '',
    sortOption: SortOptions.first,
    films: [],
    movieData: null,
};

export default initialState;
