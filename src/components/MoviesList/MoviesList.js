// @flow

import React from 'react';
import { connect } from 'react-redux';
import { createUseStyles } from 'react-jss';

import MoviesListItem from '../MoviesListItem';

const useStyles = createUseStyles({
    moviesList: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gridColumnGap: '6em',
        width: '100%',
        listStyle: 'none',
        padding: 0,
        margin: 0,
    },
});

const MoviesList = ({ films, }: {
    films: {
        id: number,
    }[],
}) => {
    const classes = useStyles();

    return (
        <ul className={classes.moviesList}>
            {films.map(item => {
                return <MoviesListItem movieData={item} key={item.id} />;
            })}
        </ul>
    )
};

const mapStateToProps = (state) => {
    return {
        films: state.films,
    }
};
export default connect(mapStateToProps)(MoviesList);
