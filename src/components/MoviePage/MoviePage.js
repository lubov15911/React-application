import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import HeaderContainer from '../HeaderContainer';
import ResultsHeader from '../ResultsHeader';
import ResultsList from '../ResultsList';

import { asyncGetMovies } from '../../actions';
import { SearchOptions } from '../../constants';

class MoviePage extends PureComponent {
    static propTypes = {
        requestData: PropTypes.func.isRequired,
        movieData: PropTypes.shape({
            genres: PropTypes.array.isRequired,
        }).isRequired,
    };

    componentDidMount() {
        const {
            requestData,
            movieData,
        } = this.props;

        requestData(movieData.genres[0], SearchOptions.second);
    }

    render() {
        return (
            <Fragment>
                <HeaderContainer />
                <ResultsHeader />
                <ResultsList />
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        movieData: state.movieData,
    }
};

export default connect(mapStateToProps, { requestData: asyncGetMovies })(MoviePage);
