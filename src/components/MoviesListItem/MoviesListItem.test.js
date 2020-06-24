import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import MoviesListItem from './MoviesListItem';

import { filmsData } from '../../../__mocks__/constantsMock';

describe('MoviesListItem', () => {
    const mockStore = configureStore()({});

    let component;

    beforeEach(() => {
        mockStore.dispatch = jest.fn();

        component = shallow(<MoviesListItem
            store={mockStore}
            movieData={filmsData[0]}
            key={filmsData[0].id}
        />).dive();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should render correctly', () => {
        expect(component).toMatchSnapshot();
    });

    it('should raise click event', () => {
        component.find('li.movie-preview').simulate('click');
        expect(mockStore.dispatch).toHaveBeenCalledTimes(1);
        // TODO: There is async action should be called here. Check it properly later
        expect(mockStore.dispatch).toHaveBeenCalledWith(expect.any(Function));
    });
});
