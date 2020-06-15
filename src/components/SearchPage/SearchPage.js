import React from 'react';
import PropTypes from 'prop-types';

import SearchPageHeader from "../SearchPageHeader/SearchPageHeader";

export default class SearchPage extends React.PureComponent {
    render() {
        const { routeToHomePage, } = this.props;

        return (<SearchPageHeader routeToHomePage={routeToHomePage} />);
    }
};
SearchPage.propTypes = {
    routeToHomePage: PropTypes.func.isRequired,
};
