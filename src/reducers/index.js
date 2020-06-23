import initialState from '../store/initialState';

import FILMS from '../data/films.json';
import {SearchOptions, SortOptions} from '../constants';

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'OPEN_MOVIE_PAGE':
            return {
                ...state,
                movieData: state.films[5],
            };
        case 'UPDATE_SORT_OPTION':
            return {
                ...state,
                sortOption: (state.sortOption === SortOptions.first) ? SortOptions.second : SortOptions.first,
            };
        case 'UPDATE_SEARCH_OPTION':
            return {
                ...state,
                searchOption: (state.searchOption === SearchOptions.first) ? SearchOptions.second : SearchOptions.first,
            };
        case 'UPDATE_SEARCH_VALUE':
            return {
                ...state,
                searchValue: action.payload,
            };
        case 'SUBMIT_SEARCH_REQUEST':
            return {
                ...state,
                searchValue: action.payload,
                films: action.payload ? state.films.filter((item) => item.title.toLowerCase().startsWith(action.payload.toLowerCase())) : FILMS.data,
            };
        default:
            return state;
    }
};

export default rootReducer;
