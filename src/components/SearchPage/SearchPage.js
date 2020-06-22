import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';

import HeaderContainer from "../HeaderContainer";
import SearchResultsContainer from '../SearchResultsContainer';

import { SearchOptions, SortOptions } from '../../constants';

export default class SearchPage extends PureComponent {
    static propTypes = {
        films: PropTypes.arrayOf(PropTypes.object).isRequired,
        goToMoviePage: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            searchOption: SearchOptions.first,
            searchValue: '',
            results: props.films,
            sortOption: SortOptions.first,
        };
        this.updateSearchOption = this.updateSearchOption.bind(this);
        this.updateSortOption = this.updateSortOption.bind(this);
        this.updateSearchValue = this.updateSearchValue.bind(this);
        this.getMovies = this.getMovies.bind(this);
    }

    getMovies(value) {
        const { films, } = this.props;
        const { searchValue, } = this.state;

        this.updateSearchValue(value);

        if (searchValue) {
            const filteredFilms = films.filter((item) => item.title.toLowerCase().startsWith(searchValue));
            this.setState({ results: filteredFilms });
        } else {
            this.setState({ results: films });
        }
    }

    updateSearchValue(value) {
        this.setState({ searchValue: value });
    }

    updateSearchOption() {
        const { searchOption, } = this.state;
        const selectedValue = (searchOption === SearchOptions.first) ? SearchOptions.second : SearchOptions.first;
        this.setState({ searchOption: selectedValue });
    }

    updateSortOption() {
        const { sortOption, } = this.state;
        const selectedValue = (sortOption === SortOptions.first) ? SortOptions.second : SortOptions.first;
        this.setState({ sortOption: selectedValue });
    }

    render() {
        const { goToMoviePage, } = this.props;
        const {
            searchOption,
            searchValue,
            sortOption,
            results,
        } = this.state;

        return (
            <Fragment>
                <HeaderContainer
                    handleSearchValue={this.updateSearchValue}
                    handleSearchSubmit={this.getMovies}
                    handleToggleSearchCriteria={this.updateSearchOption}
                    searchValue={searchValue}
                    searchOption={searchOption} />
                <SearchResultsContainer
                    total={results.length}
                    films={results}
                    handleSelectMovie={goToMoviePage}
                    sortOption={sortOption}
                    handleSortOption={this.updateSortOption} />
            </Fragment>);
    }
};
