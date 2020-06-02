import React from 'react';

import MoviePreview from '../MoviePreview/MoviePreview';

import './ResultsList.scss'

const ResultsList = (props) => {
    return (
        <ul className="results-list">
            {props.films.map(item => {
                return <MoviePreview movieData={item} key={item.id} raiseClickEvent={props.raiseClickEvent} />;
            })}
        </ul>
    );
};
export default ResultsList;
