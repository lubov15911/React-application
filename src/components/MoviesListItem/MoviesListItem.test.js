import React from 'react';
import { shallow } from 'enzyme';

import MoviesListItem from './MoviesListItem';

describe('MoviesListItem', () => {
    it('should render correctly', () => {
        const item = {
            id: 354912,
            poster_path: 'https://image.tmdb.org/t/p/w500/eKi8dIrr8voobbaGzDpe8w0PVbC.jpg',
            title: 'Coco',
            release_date: '2017-10-27',
            genres: ["Adventure", "Comedy", "Family", "Animation"],
        };
        const fakeFunction = () => {};

        const component = shallow(<MoviesListItem
            movieData={item}
            key={item.id}
            raiseClickEvent={fakeFunction}
        />);

        expect(component).toMatchSnapshot();
    });
});
