import React, { Fragment, useEffect  } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import HeaderContainer from '../HeaderContainer';
import ResultsHeader from '../ResultsHeader';
import ResultsList from '../ResultsList';

import { asyncGetMovies, updateSearchValue, } from '../../actions';

const propTypes = {
    searchOption: PropTypes.string.isRequired,
    sortOption: PropTypes.string.isRequired,
    searchValue: PropTypes.string.isRequired,
    requestDefaultData: PropTypes.func.isRequired,
    handleSearchValue: PropTypes.func.isRequired,
};

const SearchPage = ({ searchOption, sortOption, searchValue, requestDefaultData, handleSearchValue }) => {
    const { value } = useParams();


    useEffect(() => {
        if (searchValue !== value) {
            handleSearchValue(value);
        }

        requestDefaultData(value, searchOption, sortOption);
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
        searchValue: state.searchValue,
    }
};

export default connect(mapStateToProps, { requestDefaultData: asyncGetMovies, handleSearchValue: updateSearchValue })(SearchPage);
