import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';

import HeaderContainer from '../HeaderContainer';
import SearchResultsContainer from '../SearchResultsContainer';

import { SortOptions } from '../../constants';

export default class MoviePage extends PureComponent {
    static propTypes = {
        films: PropTypes.arrayOf(PropTypes.object).isRequired,
        goToMoviePage: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            sortOption: SortOptions.first,
        };
        this.updateSortOption = this.updateSortOption.bind(this);
    }

    updateSortOption() {
        const { sortOption, } = this.state;
        const selectedValue = (sortOption === SortOptions.first) ? SortOptions.second : SortOptions.first;
        this.setState({ sortOption: selectedValue });
    }

    render() {
        const {
            films,
            goToMoviePage,
        } = this.props;
        const {
            sortOption,
        } = this.state;

        return (
            <Fragment>
                <HeaderContainer movieData={films[5]} />
                <SearchResultsContainer
                    total={films.length}
                    films={films}
                    handleSelectMovie={goToMoviePage}
                    sortOption={sortOption}
                    handleSortOption={this.updateSortOption} />
            </Fragment>
        );
    }
};
