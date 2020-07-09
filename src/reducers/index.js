import initialState from '../store/initialState';

import { SortOptions } from '../constants';
import {
    OPEN_MOVIE_PAGE,
    UPDATE_SORT_OPTION,
    UPDATE_SEARCH_OPTION,
    UPDATE_SEARCH_VALUE,
    SAVE_FILM_LIST,
    RESET_PAGE_STATE,
} from '../constants/actions';

type State = {
    searchOption: string,
    searchValue: string,
    sortOption: string,
    films: Array<any>,
    movieData: ?{},
};
type Action = {
    type: string,
    payload: ?any
};

const rootReducer = (state: State = initialState, action: Action) => {
    switch (action.type) {
        case UPDATE_SEARCH_VALUE:
            return {
                ...state,
                searchValue: action.payload,
            };
        case UPDATE_SEARCH_OPTION:
            return {
                ...state,
                searchOption: action.payload,
            };
        case UPDATE_SORT_OPTION:
            // eslint-disable-next-line no-case-declarations
            const sortingField = action.payload === SortOptions.first ? 'release_date' : 'vote_average';
            return {
                ...state,
                sortOption: action.payload,
                films: [...state.films].sort((filmA, filmB) => {
                    if (filmA[sortingField] > filmB[sortingField]) return -1;
                    if (filmA[sortingField] < filmB[sortingField]) return 1;
                    return 0;
                }),
            };
        case OPEN_MOVIE_PAGE:
            return {
                ...state,
                movieData: action.payload,
            };
        case SAVE_FILM_LIST:
            return {
                ...state,
                films: action.payload,
            };
        case RESET_PAGE_STATE:
            return {
                ...state,
                films: [],
                movieData: null,
                searchValue: '',
            };
        default:
            return state;
    }
};

export default rootReducer;
