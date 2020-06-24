import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import MoviesList from './MoviesList';

import { filmsData } from '../../../__mocks__/constantsMock';

describe('MoviesList', () => {
    it('should render correctly', () => {
        const mockStore = configureStore()({
            films: filmsData,
        });

        const component = shallow(<MoviesList store={mockStore} />).dive();

        expect(component).toMatchSnapshot();
    });
});
