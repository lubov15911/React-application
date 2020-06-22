import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';

import HeaderContainer from '../HeaderContainer';
import SearchResultsContainer from '../SearchResultsContainer';

export default class MoviePage extends PureComponent {
    static propTypes = {
        films: PropTypes.arrayOf(PropTypes.object).isRequired,
        goToMoviePage: PropTypes.func.isRequired,
    };

    render() {
        const {
            films,
            goToMoviePage,
        } = this.props;

        return (
            <Fragment>
                <HeaderContainer movieData={films[5]} />
                <SearchResultsContainer
                    total={films.length}
                    films={films}
                    raiseClickEvent={goToMoviePage} />
            </Fragment>
        );
    }
};
