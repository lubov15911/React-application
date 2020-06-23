import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

import MoviesListItem from '../MoviesListItem';
import './MoviesList.scss'
import {openMoviePage,} from "../../actions";

const PROP_TYPES = {
    films: PropTypes.arrayOf(PropTypes.object).isRequired,
    goToMoviePage: PropTypes.func.isRequired,
};

const MoviesList = ({ films, goToMoviePage }) => (
    <ul className="movies-list">
        {films.map(item => {
            return <MoviesListItem movieData={item} key={item.id} raiseClickEvent={goToMoviePage} />;
        })}
    </ul>
);
MoviesList.propTypes = PROP_TYPES;

const mapStateToProps = (state) => {
    return {
        films: state.films,
    }
};
export default connect(mapStateToProps, { goToMoviePage: openMoviePage })(MoviesList);
