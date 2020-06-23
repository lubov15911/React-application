export const openMoviePage = (movieId) => ({
    type: 'OPEN_MOVIE_PAGE',
    payload: movieId,
});

export const updateSortOption = () => ({
    type: 'UPDATE_SORT_OPTION'
});

export const updateSearchOption = () => ({
    type: 'UPDATE_SEARCH_OPTION'
});

export const updateSearchValue = (value) => ({
    type: 'UPDATE_SEARCH_VALUE',
    payload: value,
});

export const submitSearchRequest = (value) => ({
    type: 'SUBMIT_SEARCH_REQUEST',
    payload: value,
});



