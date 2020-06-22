import React from 'react';
import { shallow } from 'enzyme';

import MoviesListItem from './MoviesListItem';

describe('MoviesListItem', () => {
    const item = {
        id: 354912,
        poster_path: 'https://image.tmdb.org/t/p/w500/eKi8dIrr8voobbaGzDpe8w0PVbC.jpg',
        title: 'Coco',
        release_date: '2017-10-27',
        genres: ["Adventure", "Comedy", "Family", "Animation"],
    };
    const fakeFunction = jest.fn();

    let component;

    beforeEach(() => {
        component = shallow(<MoviesListItem
            movieData={item}
            key={item.id}
            raiseClickEvent={fakeFunction}
        />);
    });

    it('should render correctly', () => {
        expect(component).toMatchSnapshot();
    });

    it('should raise click event', () => {
        component.find('li.movie-preview').simulate('click');
        expect(fakeFunction).toHaveBeenCalledWith(354912);
    });
});
