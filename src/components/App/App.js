import React from 'react';

import SearchPage from '../SearchPage/SearchPage';
import MoviePage from '../MoviePage/MoviePage';
import SearchResultsContainer from '../SearchResultsContainer/SearchResultsContainer';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import MovieContext from '../MovieContext';

import './App.scss';

import Films from '../../data/films.json';

export default class App extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            movieId: ''
        };
        this.goToMoviePage = this.goToMoviePage.bind(this);
        this.goToSearchPage = this.goToSearchPage.bind(this);
        this.getMoveData = this.getMoveData.bind(this);
    }

    getMoveData() {
        const { movieId } = this.state;
        if (!movieId) {
            return null;
        }
        return Films.data.find(item => {
            return item.id === movieId;
        });
    }

    goToSearchPage() {
        this.setState({ movieId: '' });
    }

    goToMoviePage(movieId) {
        this.setState({ movieId });
    }

    render() {
        const { movieId } = this.state;
        let currentPage;

        if (movieId) {
            currentPage =
                <MovieContext.Provider value={this.getMoveData()}>
                    <MoviePage
                        movieId={movieId}
                        routeToHomePage={this.goToSearchPage}
                    />
                </MovieContext.Provider>
        } else {
            currentPage = <SearchPage routeToHomePage={this.goToSearchPage} />;
        }

        return (
            <div className="app">
                {currentPage}
                <ErrorBoundary>
                    <SearchResultsContainer
                        total={Films.data.length}
                        films={Films.data}
                        raiseClickEvent={this.goToMoviePage}
                    />
                </ErrorBoundary>
            </div>
        );
    }
};
