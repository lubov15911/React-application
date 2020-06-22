import React from 'react';
import PropTypes from 'prop-types';

import HeaderContainer from '../HeaderContainer';
import SearchResultsContainer from '../SearchResultsContainer';

export default class MoviePage extends React.PureComponent {
    render() {
        const {
            films,
            goToMoviePage,
        } = this.props;

        return (
            <>
                <HeaderContainer movieData={films[5]} />
                <SearchResultsContainer
                    total={films.length}
                    films={films}
                    raiseClickEvent={goToMoviePage} />
            </>
        );
    }
};
MoviePage.propTypes = {
    films: PropTypes.arrayOf(PropTypes.object).isRequired,
    goToMoviePage: PropTypes.func.isRequired,
};
