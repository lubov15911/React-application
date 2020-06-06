import React from 'react';

import HeaderContainer from "../HeaderContainer/HeaderCondainer";
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
        // eslint-disable-next-line no-console
        console.log('goToMoviePage', movieId);
        this.setState({ movieId });
    }

    render() {
        const {
            movieId,
            error,
        } = this.state;

        return (
            <div className="app">
                <MovieContext.Provider value={this.getMoveData()}>
                    <HeaderContainer
                        movieId={movieId}
                        routeToHomePage={this.goToSearchPage}
                        error={error}
                    />
                </MovieContext.Provider>
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
