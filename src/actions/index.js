import { call, put, all, takeLatest } from 'redux-saga/effects';

import { URL } from '../constants';
import * as Constants from '../constants/actions';

const fetch = require('node-fetch');
const encodeurl = require('encodeurl');

// Internal functions
function getURL({ searchValue, searchOption, sortOption }) {
    let url = `${URL}movies`;
    const queries = [];
    if (sortOption) {
        queries.push(`sortBy=${sortOption.toLowerCase().replace(' ', '_')}`);
    }
    if (searchValue) {
        queries.push(`search=${searchValue}`);
    }
    if (searchOption) {
        queries.push(`searchBy=${searchOption.toLowerCase()}`);
    }

    if (queries.length) {
        url += `?${queries.join('&')}`;
    }

    return encodeurl(url);
}

// End Internal functions

// films actions
const saveFilmList = (list) => ({
    type: Constants.SAVE_FILM_LIST,
    payload: list,
});

export const getMovies = (value) => ({
    type: Constants.GET_MOVIES,
    payload: value,
});

// Saga
export function* asyncGetMovies(action) {
    const response = yield call(fetch, getURL(action.payload));
    const data = yield response.json();

    yield put(saveFilmList(data.data));
}

export function* watchGetMovies() {
    yield takeLatest(Constants.GET_MOVIES, asyncGetMovies);
}

// movieData actions
const openMoviePage = (movieData) => ({
    type: Constants.OPEN_MOVIE_PAGE,
    payload: movieData,
});

export const getMovieData = (value) => ({
    type: Constants.GET_MOVIE_DATA,
    payload: value,
});

// Saga
export function* asyncGetMovieData(action) {
    const response = yield call(fetch, `${URL}movies/${action.payload}`);
    const data = yield response.json();

    yield put(openMoviePage(data));
}

export function* watchGetMovieData() {
    yield takeLatest(Constants.GET_MOVIE_DATA, asyncGetMovieData);
}

export function* appSaga() {
    yield all([
        watchGetMovies(),
        watchGetMovieData(),
    ]);
}

// searchValue actions
export const updateSearchValue = (value) => ({
    type: Constants.UPDATE_SEARCH_VALUE,
    payload: value,
});

// searchOption/sortOption actions
export const updateSortOption = (value) => ({
    type: Constants.UPDATE_SORT_OPTION,
    payload: value,
});

export const updateSearchOption = (value) => ({
    type: Constants.UPDATE_SEARCH_OPTION,
    payload: value,
});

export const resetState = () => ({
    type: Constants.RESET_PAGE_STATE
});
