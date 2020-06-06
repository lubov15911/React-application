import React from 'react';
import PropTypes from 'prop-types';

import SearchResultsContainer from '../SearchResultsContainer/SearchResultsContainer';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import SearchPageHeader from "../SearchPageHeader/SearchPageHeader";

export default class SearchPage extends React.PureComponent {
    render() {
        const {
            films,
            routeToHomePage,
            goToMoviePage,
        } = this.props;
        return (
            <>
                <SearchPageHeader
                    routeToHomePage={routeToHomePage} />
                <ErrorBoundary>
                    <SearchResultsContainer
                        total={films.length}
                        films={films}
                        raiseClickEvent={goToMoviePage}
                    />
                </ErrorBoundary>
            </>
        );
    }
};
SearchPage.propTypes = {
    films: PropTypes.arrayOf(PropTypes.object).isRequired,
    routeToHomePage: PropTypes.func.isRequired,
    goToMoviePage: PropTypes.func.isRequired,
};
