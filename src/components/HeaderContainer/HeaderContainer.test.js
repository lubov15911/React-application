import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import HeaderContainer from './HeaderContainer';

import { moviePreviewData } from '../../../__mocks__/constantsMock';

describe('HeaderContainer', () => {
    it('should render correctly with movieData', () => {
        const mockStore = configureStore()({
            movieData: moviePreviewData,
        });

        const component = shallow(<HeaderContainer store={mockStore} />).dive();

        expect(component).toMatchSnapshot();
    });

    it('should render correctly with empty movieData', () => {
        const mockStore = configureStore()({
            movieData: null,
        });

        const component = shallow(<HeaderContainer store={mockStore} />).dive();

        expect(component).toMatchSnapshot();
    });
});
