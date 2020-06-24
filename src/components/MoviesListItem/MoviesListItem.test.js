import React from 'react';
import { shallow } from 'enzyme';

import MoviesListItem from './MoviesListItem';

import { filmsData } from '../../../__mocks__/constantsMock';

describe('MoviesListItem', () => {
    const spyFakeFunction = jest.fn();

    let component;

    beforeEach(() => {
        component = shallow(<MoviesListItem
            movieData={filmsData[0]}
            key={filmsData[0].id}
            raiseClickEvent={spyFakeFunction}
        />);
    });

    it('should render correctly', () => {
        expect(component).toMatchSnapshot();
    });

    it('should raise click event', () => {
        component.find('li.movie-preview').simulate('click');
        expect(spyFakeFunction).toHaveBeenCalledWith(354912);
    });
});
