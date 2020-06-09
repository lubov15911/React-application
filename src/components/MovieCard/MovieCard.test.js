import React from 'react';
import { shallow } from 'enzyme';

import MovieCard from './MovieCard';

describe('MovieCard', () => {
    it('should render correctly with available context', () => {
        jest.mock('../MovieContext.js', () => ({
            MovieContext: {
                Consumer: ({children}) => children({
                    poster_path: 'https://image.tmdb.org/t/p/w500/eKi8dIrr8voobbaGzDpe8w0PVbC.jpg',
                    title: 'Coco',
                    vote_average: 7.8,
                    tagline: 'The celebration of a lifetime',
                    release_date: '2017-10-27',
                    runtime: 105,
                    overview: 'Despite his family’s baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz.',
                })
            }
        }));
        const component = shallow(<MovieCard />);

        expect(component).toMatchSnapshot();
    });

    it('should render correctly with unavailable context', () => {
        jest.mock('../MovieContext', () => ({
            MovieContext: {
                Consumer: ({children}) => children(null)
            }
        }));
        const component = shallow(<MovieCard />);

        expect(component).toMatchSnapshot();
    });
});
