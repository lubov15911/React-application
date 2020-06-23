import initialState from '../store/initialState';

import { SearchOptions, SortOptions } from '../constants';
import {
    OPEN_MOVIE_PAGE,
    UPDATE_SORT_OPTION,
    UPDATE_SEARCH_OPTION,
    UPDATE_SEARCH_VALUE,
    SAVE_FILM_LIST,
} from '../constants/actions';

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_MOVIE_PAGE:
            return {
                ...state,
                movieData: action.payload,
            };
        case UPDATE_SORT_OPTION:
            return {
                ...state,
                sortOption: (state.sortOption === SortOptions.first) ? SortOptions.second : SortOptions.first,
            };
        case UPDATE_SEARCH_OPTION:
            return {
                ...state,
                searchOption: (state.searchOption === SearchOptions.first) ? SearchOptions.second : SearchOptions.first,
            };
        case UPDATE_SEARCH_VALUE:
            return {
                ...state,
                searchValue: action.payload,
            };
        case SAVE_FILM_LIST:
            return {
                ...state,
                films: action.payload,
            };
        default:
            return state;
    }
};

export default rootReducer;
