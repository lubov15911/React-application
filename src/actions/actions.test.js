import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock'

import {
    updateSearchValue,
    updateSearchOption,
    updateSortOption,
    asyncGetMovieData,
    asyncGetMovies,
} from './index';

import {
    UPDATE_SEARCH_VALUE,
    UPDATE_SEARCH_OPTION,
    UPDATE_SORT_OPTION,
    OPEN_MOVIE_PAGE,
    SAVE_FILM_LIST,
} from '../constants/actions';

import {
    SearchOptions,
    SortOptions,
    URL,
} from '../constants';

import { moviePreviewData } from '../../__mocks__/constantsMock';

describe('actions', () => {
    describe('sync actions', () => {
        it('should create an action to update search value', () => {
            const searchValue = 'Kill Bill';
            const expectedAction = {
                type: UPDATE_SEARCH_VALUE,
                payload: searchValue,
            };
            expect(updateSearchValue(searchValue)).toEqual(expectedAction);
        });

        it('should create an action to update search option', () => {
            const expectedAction = {
                type: UPDATE_SEARCH_OPTION,
                payload: SearchOptions.second,
            };
            expect(updateSearchOption(SearchOptions.second)).toEqual(expectedAction);
        });

        it('should create an action to update sort option', () => {
            const expectedAction = {
                type: UPDATE_SORT_OPTION,
                payload: SortOptions.second,
            };
            expect(updateSortOption(SortOptions.second)).toEqual(expectedAction);
        });
    });

    // TODO: Create async actions tests
    xdescribe('async actions', () => {
        const mockStore = configureStore([thunk]);
        const movieId = 354912;

        afterEach(() => {
            fetchMock.restore();
        });

        it('should ', () => {
            fetchMock.getOnce(`${URL}/movies/${movieId}`, {
                body: moviePreviewData,
                headers: { 'content-type': 'application/json' }
            });


            const expectedActions = [{
                type: OPEN_MOVIE_PAGE,
                payload: moviePreviewData
            }];

            const store = mockStore({ movieData: null });

            return store.dispatch(asyncGetMovieData(movieId)).then(() => {
                // return of async actions
                expect(store.getActions()).toEqual(expectedActions);
            });
        });
    });
});
