// @flow

import React from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';

import ToggleComponent from '../ToggleComponent';

import './ResultsHeader.scss';

import { SortOptions } from '../../constants';
import { updateSortOption } from '../../actions';

const ResultsHeader = ({ movieData, resultsAmount, sortOption, toggleSortOption, }: {
    movieData: ?{
        genres: string[],
    },
    resultsAmount: number,
    sortOption: string,
    toggleSortOption: (sortOption: string) => void,
}) => {
    const location = useLocation();
    let renderHeader = null;

    if (location.pathname.startsWith('/film')) {
        renderHeader = <p>Films by {movieData && movieData.genres[0]} genre</p>;
    } else {
        renderHeader = <p><b>{resultsAmount} movie found</b></p>;
    }

    const handleToggle = ({ currentTarget: { value } }) => toggleSortOption(value);

    return (
        <div className="results-header">
            {renderHeader}
            <ToggleComponent
                className="toggle1"
                toggleType="Sort "
                options={SortOptions}
                selected={sortOption}
                handleToggle={handleToggle} />
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        resultsAmount: state.films.length,
        sortOption: state.sortOption,
        movieData: state.movieData,
    }
};
export default connect(mapStateToProps, { toggleSortOption: updateSortOption })(ResultsHeader);
