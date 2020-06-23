import { URL } from '../constants';
import {
    SAVE_FILM_LIST,
    OPEN_MOVIE_PAGE,
    UPDATE_SEARCH_VALUE,
    UPDATE_SORT_OPTION,
    UPDATE_SEARCH_OPTION
} from '../constants/actions';

const fetch = require('node-fetch');
const encodeurl = require('encodeurl');

// films actions
const saveFilmList = (list) => ({
    type: SAVE_FILM_LIST,
    payload: list,
});

export const asyncGetMovies = (searchValue, searchOption, sortOption) => {
    return dispatch => {
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

        fetch(encodeurl(url)).then((response) => response.json()).then((data) => dispatch(saveFilmList(data.data)));
    }
};

// movieData actions
const openMoviePage = (movieData) => ({
    type: OPEN_MOVIE_PAGE,
    payload: movieData,
});

export const asyncGetMovieData = (movieId) => {
    return dispatch => {
        fetch(`${URL}movies/${movieId}`)
            .then((response) => response.json())
            .then((data) => dispatch(openMoviePage(data)));
    }
};

// searchValue actions
export const updateSearchValue = (value) => ({
    type: UPDATE_SEARCH_VALUE,
    payload: value,
});

// searchOption/sortOption actions
export const updateSortOption = (value) => ({
    type: UPDATE_SORT_OPTION,
    payload: value,
});

export const updateSearchOption = (value) => ({
    type: UPDATE_SEARCH_OPTION,
    payload: value,
});
