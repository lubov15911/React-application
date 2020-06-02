import React from 'react';

import HeaderContainer from "../HeaderContainer/HeaderCondainer";
import SearchResultsContainer from '../SearchResultsContainer/SearchResultsContainer';

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

    goToMoviePage(movieId) {
        console.log('goToMoviePage', movieId);
        this.setState({ movieId });
    }

    goToSearchPage() {
        this.setState({ movieId: '' });
    }

    getMoveData() {
        if (!this.state.movieId) {
            return null;
        } else {
            return Films.data.find(item => {
                return item.id === this.state.movieId;
            });
        }
    }

    render() {
        return (
            <div className="app">
                <HeaderContainer movieId={this.state.movieId} movie={this.getMoveData()} routeToHomePage={this.goToSearchPage}/>
                <SearchResultsContainer total={Films.data.length} films={Films.data} raiseClickEvent={this.goToMoviePage} />
            </div>
        );
    }
};
