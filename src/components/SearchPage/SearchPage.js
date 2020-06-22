import React from 'react';
import PropTypes from 'prop-types';

import HeaderContainer from "../HeaderContainer";
import SearchResultsContainer from '../SearchResultsContainer';

const SearchOptions = {
    first: 'Title',
    second: 'Genre'
};

export default class SearchPage extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            searchOption: SearchOptions.first,
            searchValue: '',
            searchResults: this.props.films,
        };
        this.updateSearchOption = this.updateSearchOption.bind(this);
        this.getMovies = this.getMovies.bind(this);
    }

    updateSearchOption() {
        const { searchOption, } = this.state;
        const newValue = (searchOption === SearchOptions.first) ? SearchOptions.second : SearchOptions.first;
        this.setState({ searchOption: newValue });
    }

    getMovies(searchValue) {
        const { films, } = this.props;

        this.setState({ searchValue: searchValue });

        if (!searchValue) {
            this.setState({ searchResults: films });
        } else {
            let filteredFilms = films.filter((item) => item.title.toLowerCase().startsWith(searchValue));
            this.setState({ searchResults: filteredFilms });
        }
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
SearchPage.propTypes = {
    films: PropTypes.arrayOf(PropTypes.object).isRequired,
    goToMoviePage: PropTypes.func.isRequired,
};
