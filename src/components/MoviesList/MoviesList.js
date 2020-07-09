// @flow

import React from 'react';
import { connect } from 'react-redux';

import MoviesListItem from '../MoviesListItem';

import './MoviesList.scss'

const MoviesList = ({ films, }: {
    films: {
        id: number,
    }[],
}) => (
    <ul className="movies-list">
        {films.map(item => {
            return <MoviesListItem movieData={item} key={item.id} />;
        })}
    </ul>
);

const mapStateToProps = (state) => {
    return {
        films: state.films,
    }
};
export default connect(mapStateToProps)(MoviesList);
