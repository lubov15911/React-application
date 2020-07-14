// @flow

import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    moviePreview: {
        maxWidth: '32.5em',
        width: '32.5em',
        marginBottom: '4.5em',
        cursor: 'pointer',
    },

    moviePreviewPoster: {
        width: '100%',
    },

    moviePreviewGenre: {
        fontSize: '1.4em',
        opacity: '0.7',
    },

    moviePreviewHeader: {
        opacity: '0.7',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '1em 0 0.3em 0',
        fontSize: '1.8em',
    },

    moviePreviewYear: {
        border: '0.1em white solid',
        borderRadius: '0.4em',
        padding: '0.1em 0.5em',
        boxSizing: 'border-box',
    },
});

const MoviesListItem = ({ movieData, }: {
    movieData: {
        id: number,
        poster_path: string,
        title: string,
        release_date: string,
        genres: string[],
    },
}) => {
    const classes = useStyles();
    const history = useHistory();

    const handleClick = () => {
        history.push(`/film/${movieData.id}`);
    };

    return (
        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
        <li className={classes.moviePreview} onClick={handleClick} onKeyPress={handleClick}>
            <img src={movieData.poster_path} alt="" className={classes.moviePreviewPoster} />
            <div className={classes.moviePreviewHeader}>
                <p>{movieData.title}</p>
                <div className={classes.moviePreviewYear}><span>{movieData.release_date.slice(0, 4)}</span></div>
            </div>
            <span className={classes.moviePreviewGenre}>{movieData.genres.join(', ')}</span>
        </li>
    );
};

export default connect(null)(MoviesListItem);
