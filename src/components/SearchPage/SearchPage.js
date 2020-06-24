import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import HeaderContainer from '../HeaderContainer';
import ResultsHeader from '../ResultsHeader';
import ResultsList from '../ResultsList';

import { asyncGetMovies } from '../../actions';

class SearchPage extends PureComponent {
    static propTypes = {
        requestDefaultData: PropTypes.func.isRequired,
    };

    componentDidMount() {
        const { requestDefaultData } = this.props;
        requestDefaultData();
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

export default connect(null, { requestDefaultData: asyncGetMovies })(SearchPage);
