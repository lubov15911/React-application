import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import MoviesListItem from '../MoviesListItem';

import './MoviesList.scss'

const propTypes = {
    films: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const MoviesList = ({ films }) => (
    <ul className="movies-list">
        {films.map(item => {
            return <MoviesListItem movieData={item} key={item.id} />;
        })}
    </ul>
);
MoviesList.propTypes = propTypes;

const mapStateToProps = (state) => {
    return {
        films: state.films,
    }
};
export default connect(mapStateToProps)(MoviesList);
