import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import HeaderContainer from '../HeaderContainer';
import ResultsHeader from '../ResultsHeader';
import ResultsList from '../ResultsList';

import { resetState } from '../../actions';

class EmptyPage extends PureComponent {
    static propTypes = {
        resetData: PropTypes.func.isRequired,
    };

    componentDidMount() {
        const { resetData } = this.props;
        resetData();
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

export default connect(null, { resetData: resetState })(EmptyPage);
