// @flow

import React, { Fragment, useEffect  } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import HeaderContainer from '../HeaderContainer';
import ResultsHeader from '../ResultsHeader';
import ResultsList from '../ResultsList';

import { asyncGetMovies, updateSearchValue, } from '../../actions';

const SearchPage = ({ searchOption, sortOption, searchValue, requestDefaultData, handleSearchValue }: {
    searchOption: string,
    sortOption: string,
    searchValue: string,
    requestDefaultData: (searchValue: string, searchOption: string, sortOption: string) => void,
    handleSearchValue: (searchValue: string) => void,
}) => {
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

const mapStateToProps = (state) => {
    return {
        searchOption: state.searchOption,
        sortOption: state.sortOption,
        searchValue: state.searchValue,
    }
};

export default connect(mapStateToProps, { requestDefaultData: asyncGetMovies, handleSearchValue: updateSearchValue })(SearchPage);
