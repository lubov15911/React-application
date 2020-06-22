import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';

import ResultsHeader from '../ResultsHeader';
import ResultsList from '../ResultsList';

export default class SearchResultsContainer extends Component {
    static propTypes = {
        total: PropTypes.number.isRequired,
        films: PropTypes.arrayOf(PropTypes.object).isRequired,
        handleSelectMovie: PropTypes.func.isRequired,
    };

    // TODO: remove static when this is used
    static updateSortOption(newValue) {
        // eslint-disable-next-line no-console
        console.log('New sort option:', newValue);
        // TODO: is gonna be used
        // this.setState({ sortBy: newValue });
    }

    render() {
        const {
            total,
            films,
            handleSelectMovie,
        } = this.props;

        return (
            <Fragment>
                <ResultsHeader totalResults={total} handleSortOption={SearchResultsContainer.updateSortOption} />
                <ResultsList totalResults={total} films={films} raiseClickEvent={handleSelectMovie} />
            </Fragment>
        );
    }
}
