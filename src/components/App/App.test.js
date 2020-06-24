import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import App from './App';

describe('App', () => {
    it('should render correctly without movieData', () => {
        const mockStore = configureStore()({
            movieData: null,
        });

        const component = shallow(<App store={mockStore} />).dive();

        expect(component).toMatchSnapshot();
    });

    it('should render correctly with movieData', () => {
        const mockStore = configureStore()({
            movieData: {},
        });

        const component = shallow(<App store={mockStore} />).dive();

        expect(component).toMatchSnapshot();
    });
});
