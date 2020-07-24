import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import { all } from 'redux-saga/effects';

import rootReducer from '../reducers';
import { appSaga } from "../actions";

function* rootSaga() {
    yield all([
        appSaga(),
    ]);
}

const sagaMiddleware = createSagaMiddleware();

export default (initialState) => {
    const store = createStore(rootReducer, initialState, applyMiddleware(sagaMiddleware));

    sagaMiddleware.run(rootSaga);
    store.runSaga = () => sagaMiddleware.run(rootSaga);
    store.close = () => store.dispatch(END);

    return store;
}
