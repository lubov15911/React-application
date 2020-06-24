import React from 'react';
import { shallow } from 'enzyme';

import MovieCard from './MovieCard';

import { moviePreviewData } from '../../../__mocks__/constantsMock';

describe('MovieCard', () => {
    it('should render correctly', () => {
        const component = shallow(<MovieCard movieData={moviePreviewData} />);

        expect(component).toMatchSnapshot();
    });
});
