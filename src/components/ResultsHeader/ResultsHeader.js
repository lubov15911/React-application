// @flow

import React from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { createUseStyles } from 'react-jss';

import ToggleComponent from '../ToggleComponent';

import * as Colors from '../../constants/colors';
import { SortOptions } from '../../constants';
import { updateSortOption } from '../../actions';

const useStyles = createUseStyles({
    resultsHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 12em',
        height: '7em',
        backgroundColor: Colors.Gray,

        '& > p': {
            fontSize: '1.5em',
        }
    },
});

const ResultsHeader = ({ movieData, resultsAmount, sortOption, toggleSortOption, }: {
    movieData: ?{
        genres: string[],
    },
    resultsAmount: number,
    sortOption: string,
    toggleSortOption: (sortOption: string) => void,
}) => {
    const classes = useStyles();
    const location = useLocation();
    let renderHeader = null;

    if (location.pathname.startsWith('/film')) {
        renderHeader = <p>Films by {movieData && movieData.genres[0]} genre</p>;
    } else {
        renderHeader = <p><b>{resultsAmount} movie found</b></p>;
    }

    const handleToggle = ({ currentTarget: { value } }) => toggleSortOption(value);

    return (
        <div className={classes.resultsHeader}>
            {renderHeader}
            <ToggleComponent
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
