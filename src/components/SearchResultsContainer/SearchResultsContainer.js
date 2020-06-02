import React from 'react';
import PropTypes from 'prop-types';

import ResultsHeader from '../ResultsHeader/ResultsHeader';
import SearchResults from '../SearchResults/SearchResults';

export default class SearchResultsContainer extends React.Component {
    // TODO: is gonna be used
    /* constructor(props) {
        super(props);
        this.state = {
            sortBy: ''
        };
        this.updateSortOption = this.updateSortOption.bind(this);
    } */

    // TODO: remove static when this is used
    static updateSortOption(newValue) {
        // eslint-disable-next-line no-console
        console.log('New sort option:', newValue);
        // TODO: is gonna be used
        // this.setState({ sortBy: newValue });
    }

    render() {
        const {
            total,
            films,
            raiseClickEvent,
        } = this.props;

        return (
            <div>
                <ResultsHeader totalResults={total} handleSortOption={SearchResultsContainer.updateSortOption} />
                <SearchResults totalResults={total} films={films} raiseClickEvent={raiseClickEvent}/>
            </div>
        );
    }
}
SearchResultsContainer.propTypes = {
    total: PropTypes.number.isRequired,
    films: PropTypes.arrayOf(PropTypes.object).isRequired,
    raiseClickEvent: PropTypes.func.isRequired,
};
