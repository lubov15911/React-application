import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import HeaderContainer from "../HeaderContainer";
import SearchResultsContainer from '../SearchResultsContainer';

const SearchOptions = {
    first: 'Title',
    second: 'Genre'
};

export default class SearchPage extends PureComponent {
    static propTypes = {
        films: PropTypes.arrayOf(PropTypes.object).isRequired,
        goToMoviePage: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        const { films, } = this.props;
        this.state = {
            searchOption: SearchOptions.first,
            searchValue: '',
            searchResults: films,
        };
        this.updateSearchOption = this.updateSearchOption.bind(this);
        this.getMovies = this.getMovies.bind(this);
    }

    getMovies(value) {
        const { films, } = this.props;
        const { searchValue, } = this.state;

        this.setState({ searchValue: value });


        if (!searchValue) {
            this.setState({ searchResults: films });
        } else {
            const filteredFilms = films.filter((item) => item.title.toLowerCase().startsWith(searchValue));
            this.setState({ searchResults: filteredFilms });
        }
    }

    updateSearchOption() {
        const { searchOption, } = this.state;
        const newValue = (searchOption === SearchOptions.first) ? SearchOptions.second : SearchOptions.first;
        this.setState({ searchOption: newValue });
    }

    render() {
        const { goToMoviePage, } = this.props;
        const {
            searchOption,
            searchResults,
        } = this.state;

        return (
            <>
                <HeaderContainer
                    handleSearchValue={this.getMovies}
                    toggleSearch={this.updateSearchOption}
                    searchOption={searchOption} />
                <SearchResultsContainer
                    total={searchResults.length}
                    films={searchResults}
                    raiseClickEvent={goToMoviePage} />
            </>);
    }
};
