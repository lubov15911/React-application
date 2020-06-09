import React from 'react';
import { shallow } from 'enzyme';

import MoviePageHeader from './MoviePageHeader';

describe('MoviePageHeader', () => {
    it('should render correctly', () => {
        const movieId = 354912;
        const fakeFunction = () => {};

        const component = shallow(<MoviePageHeader
            movieId={movieId}
            routeToHomePage={fakeFunction}
        />);

        expect(component).toMatchSnapshot();
    });
});
