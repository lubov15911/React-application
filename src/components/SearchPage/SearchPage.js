import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import HeaderContainer from '../HeaderContainer';
import ResultsHeader from '../ResultsHeader';
import ResultsList from '../ResultsList';

import { getMovies, updateSearchValue, } from '../../actions';

class SearchPage extends PureComponent {
    static propTypes = {
        searchOption: PropTypes.string.isRequired,
        sortOption: PropTypes.string.isRequired,
        searchValue: PropTypes.string.isRequired,
        requestDefaultData: PropTypes.func.isRequired,
        handleSearchValue: PropTypes.func.isRequired,
        match: PropTypes.shape({
            params: PropTypes.shape({
                value: PropTypes.string.isRequired,
            }),
        }).isRequired,
    };

    UNSAFE_componentWillMount() {
        const {
            searchValue,
            searchOption,
            sortOption,
            handleSearchValue,
            requestDefaultData,
            match: {
                params: {
                    value,
                }
            }
        } = this.props;

        if (searchValue !== value) {
            handleSearchValue(value);
        }

        requestDefaultData({ searchValue: value, searchOption, sortOption });
    }

    render() {
        return (
            <Fragment>
                <HeaderContainer />
                <ResultsHeader />
                <ResultsList />
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        searchOption: state.searchOption,
        sortOption: state.sortOption,
        searchValue: state.searchValue,
    }
};

export default connect(mapStateToProps, { requestDefaultData: getMovies, handleSearchValue: updateSearchValue })(SearchPage);
