import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import ResultsList from './ResultsList';

import { filmsData } from "../../../__mocks__/constantsMock";

describe('ResultsList', () => {
    it('should render correctly films array', () => {
        const mockStore = configureStore()({
            films: filmsData,
        });

        const component = shallow(<ResultsList store={mockStore} />).dive();

        expect(component).toMatchSnapshot();
    });

    it('should render correctly empty films array', () => {
        const mockStore = configureStore()({
            films: [],
        });

        const component = shallow(<ResultsList store={mockStore} />).dive();

        expect(component).toMatchSnapshot();
    });
});
