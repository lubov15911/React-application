import React from 'react';

import SearchPage from '../SearchPage/SearchPage';
import MoviePage from '../MoviePage/MoviePage';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

import './App.scss';

import Films from '../../data/films.json';

export default class App extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            movieId: ''
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
                    {movieId &&
                    <MoviePage
                        films={Films.data}
                        goToMoviePage={this.goToMoviePage} />
                    }
                    {!movieId &&
                    <SearchPage
                        films={Films.data}
                        goToMoviePage={this.goToMoviePage} />
                    }
                </div>
            </ErrorBoundary>
        );
    }
};
