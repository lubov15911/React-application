// @flow

import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';

import HeaderContainer from '../HeaderContainer';
import ResultsHeader from '../ResultsHeader';
import ResultsList from '../ResultsList';

import { resetState } from '../../actions';

type Props = {
    resetData: () => void,
}

class EmptyPage extends PureComponent<Props> {
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
