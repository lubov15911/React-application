import React from 'react';
import { shallow } from 'enzyme';

import MoviesList from './MoviesList';

import { filmsData } from '../../../__mocks__/constantsMock';

describe('MoviesList', () => {
    it('should render correctly', () => {
        const simpleFakeFunction = () => {};

        const component = shallow(<MoviesList
            films={filmsData}
            raiseClickEvent={simpleFakeFunction}
        />);

        expect(component).toMatchSnapshot();
    });
});
