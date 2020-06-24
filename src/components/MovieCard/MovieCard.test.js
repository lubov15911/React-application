import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import MovieCard from './MovieCard';

import { moviePreviewData } from '../../../__mocks__/constantsMock';

describe('MovieCard', () => {
    it('should render correctly', () => {
        const mockStore = configureStore()({
            movieData: moviePreviewData,
        });

        const component = shallow(<MovieCard store={mockStore} />).dive();

        expect(component).toMatchSnapshot();
    });
});
