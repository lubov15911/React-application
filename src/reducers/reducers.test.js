import reducer from './index';
import {
    UPDATE_SEARCH_VALUE,
    UPDATE_SEARCH_OPTION,
    UPDATE_SORT_OPTION,
    OPEN_MOVIE_PAGE,
    SAVE_FILM_LIST,
} from '../constants/actions';
import {
    updateSearchValue,
    updateSearchOption,
    updateSortOption,
} from '../actions';
import { SearchOptions, SortOptions } from '../constants';
import { searchValueData, filmsData, moviePreviewData } from '../../__mocks__/constantsMock';


describe('reducers', () => {
    const initState = {
        searchOption: SearchOptions.first,
        searchValue: '',
        sortOption: SortOptions.first,
        films: [],
        movieData: null,
    };

    let newState;

    beforeEach(() => {
        newState = Object.assign(initState, {});
    });

    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initState);
    });

    it(`should handle ${UPDATE_SEARCH_VALUE} action`, () => {
        newState.searchValue = searchValueData;

        expect(reducer(initState, updateSearchValue(searchValueData)))
            .toEqual(newState);
    });

    it(`should handle ${UPDATE_SEARCH_OPTION} action`, () => {
        newState.searchOption = SearchOptions.second;

        expect(reducer(initState, updateSearchOption(SearchOptions.second)))
            .toEqual(newState);
    });

    it(`should handle ${UPDATE_SORT_OPTION} action and update sortOption`, () => {
        newState.sortOption = SortOptions.second;

        expect(reducer(initState, updateSortOption(SortOptions.second)))
            .toEqual(newState);
    });

    it(`should handle ${UPDATE_SORT_OPTION} action and update films order`, () => {
        const newInitState = {
            searchOption: SearchOptions.first,
            searchValue: '',
            sortOption: SortOptions.second,
            films: filmsData,
            movieData: null,
        };
        newState = Object.assign(newInitState, {});
        newState.sortOption = SortOptions.first;
        newState.films = [filmsData[2], filmsData[3], filmsData[0], filmsData[1]];

        expect(reducer(newInitState, updateSortOption(SortOptions.first)))
            .toEqual(newState);
    });

    it(`should handle ${OPEN_MOVIE_PAGE} action and update movieData`, () => {
        newState.movieData = moviePreviewData;

        expect(reducer(initState, {
            type: OPEN_MOVIE_PAGE,
            payload: moviePreviewData,
        })).toEqual(newState);
    });

    it(`should handle ${SAVE_FILM_LIST} action and update movieData`, () => {
        newState.films = filmsData;

        expect(reducer(initState, {
            type: SAVE_FILM_LIST,
            payload: filmsData,
        })).toEqual(newState);
    });
});
