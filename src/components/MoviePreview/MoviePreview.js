import React from 'react';

import './MoviePreview.scss';

const MoviePreview = (props) => {
    const data = props.movieData;

    function handleClick() {
        props.raiseClickEvent(data.id);
    }

    return (
        <li className="movie-preview" onClick={handleClick}>
            <img src={data.poster_path} alt="" className="movie-preview-poster"/>
            <div className="movie-preview-header">
                <p>{data.title}</p>
                <div className="movie-preview-year"><span>{data.release_date.slice(0, 4)}</span></div>
            </div>
            <span className="movie-preview-genre">{data.genres.join(', ')}</span>
        </li>
    );
};
export default MoviePreview;
