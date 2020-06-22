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
        this.getMovies = this.getMovies.bind(this);
    }

    getMovies(value) {
        const { films, } = this.props;
        const { searchValue, } = this.state;

        this.setState({ searchValue: value });


        if (searchValue) {
            const filteredFilms = films.filter((item) => item.title.toLowerCase().startsWith(searchValue));
            this.setState({ results: filteredFilms });
        } else {
            this.setState({ results: films });
        }
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
            sortOption,
            results,
        } = this.state;

        return (
            <Fragment>
                <HeaderContainer
                    handleSearchValue={this.getMovies}
                    handleToggleSearchCriteria={this.updateSearchOption}
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
