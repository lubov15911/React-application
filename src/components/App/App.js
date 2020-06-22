import React, { PureComponent } from 'react';

import SearchPage from '../SearchPage';
import MoviePage from '../MoviePage';
import ErrorBoundary from '../ErrorBoundary';

import './App.scss';

import FILMS from '../../data/films.json';

export default class App extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            movieId: null
        };
        this.goToMoviePage = this.goToMoviePage.bind(this);
    }

    goToMoviePage(movieId) {
        this.setState({ movieId });
    }

    render() {
        const { movieId, } = this.state;

        return (
            <ErrorBoundary>
                <div className="app">
                    {movieId ? <MoviePage films={FILMS.data} goToMoviePage={this.goToMoviePage} /> :
                        <SearchPage films={FILMS.data} goToMoviePage={this.goToMoviePage} />}
                </div>
            </ErrorBoundary>
        );
    }
};
