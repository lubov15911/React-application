import React from 'react';
import PropTypes from 'prop-types';

import HeaderContainer from "../HeaderContainer/HeaderContainer";
import SearchResultsContainer from '../SearchResultsContainer/SearchResultsContainer';

export default class SearchPage extends React.PureComponent {
    render() {
        const {
            films,
            goToMoviePage,
        } = this.props;

        return (
            <>
                <HeaderContainer />
                <SearchResultsContainer
                    total={films.length}
                    films={films}
                    raiseClickEvent={goToMoviePage} />
            </>);
    }
};
SearchPage.propTypes = {
    films: PropTypes.arrayOf(PropTypes.object).isRequired,
    goToMoviePage: PropTypes.func.isRequired,
};
