import React from 'react';
import PropTypes from 'prop-types';

import MoviePreview from '../MoviePreview/MoviePreview';
import './ResultsList.scss'

const ResultsList = (props) => {
    const {
        films,
        raiseClickEvent
    } = props;

    return (
        <ul className="results-list">
            {films.map(item => {
                return <MoviePreview movieData={item} key={item.id} raiseClickEvent={raiseClickEvent} />;
            })}
        </ul>
    );
};
ResultsList.propTypes = {
    films: PropTypes.arrayOf(PropTypes.object).isRequired,
    raiseClickEvent: PropTypes.func.isRequired,
};

export default ResultsList;
