import React from 'react';
import PropTypes from 'prop-types';

import HomePageLogoButton from '../HomePageLogoButton/HomePageLogoButton';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import SearchHeader from '../SearchHeader/SearchHeader';

import './SearchPageHeader.scss';

const SearchPageHeader = (props) => {
    const {
        routeToHomePage,
    } = props;

    return (
        <div className="header-container">
            <HomePageLogoButton handleClick={routeToHomePage} />
            <ErrorBoundary>
                <SearchHeader  />
            </ErrorBoundary>
        </div>
    );
};
SearchPageHeader.propTypes = {
    routeToHomePage: PropTypes.func.isRequired,
};

export default SearchPageHeader;
