import React from 'react';

import { storiesOf } from '@storybook/react';

import configureStore from '../src/store';

import MoviesListItem from '../src/components/MoviesListItem';

const store = configureStore();
const item = {
    poster_path: 'https://image.tmdb.org/t/p/w500/eKi8dIrr8voobbaGzDpe8w0PVbC.jpg',
    title: 'Coco',
    vote_average: 7.8,
    tagline: 'The celebration of a lifetime',
    release_date: '2017-10-27',
    runtime: 105,
    genres: ["Adventure", "Comedy", "Family", "Animation"],
    overview: 'Despite his family’s baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz.',
};

const MovieListItemComponent = () => (<MoviesListItem movieData={item} key={item.id} store={store} />);

storiesOf('MovieListItem', module)
    .add('MovieListItem', MovieListItemComponent);
