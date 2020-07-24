import React, { Fragment, PureComponent } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";

import HeaderContainer from '../HeaderContainer';
import ResultsHeader from '../ResultsHeader';
import ResultsList from '../ResultsList';

import { getMovieData } from "../../actions";

class MoviePage extends PureComponent {
    static propTypes = {
        downloadMovieData: PropTypes.func.isRequired,
        match: PropTypes.shape({
            params: PropTypes.shape({
                id: PropTypes.string.isRequired,
            }),
        }).isRequired,
    };

    UNSAFE_componentWillMount() {
        const {
            downloadMovieData,
            match: {
                params: {
                    id,
                }
            }
        } = this.props;

        downloadMovieData(id);
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

export default connect(null, { downloadMovieData: getMovieData })(MoviePage);
