import React, { Fragment, useEffect  } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';

import HeaderContainer from '../HeaderContainer';
import ResultsHeader from '../ResultsHeader';
import ResultsList from '../ResultsList';

import { asyncGetMovies } from '../../actions';

const propTypes = {
    searchOption: PropTypes.string.isRequired,
    sortOption: PropTypes.string.isRequired,
    requestDefaultData: PropTypes.func.isRequired,
};

const SearchPage = ({ searchOption, sortOption, requestDefaultData }) => {
    const query = new URLSearchParams(useLocation().search);

    useEffect(() => {
        const querySearchValue = query.get('search');
        requestDefaultData(querySearchValue, searchOption, sortOption);
    });

    return (
        <Fragment>
            <HeaderContainer />
            <ResultsHeader />
            <ResultsList />
        </Fragment>
    );
};
SearchPage.propTypes = propTypes;

const mapStateToProps = (state) => {
    return {
        searchOption: state.searchOption,
        sortOption: state.sortOption,
    }
};

export default connect(mapStateToProps, { requestDefaultData: asyncGetMovies })(SearchPage);
