import React from 'react';
import { shallow } from 'enzyme';

import MoviePage from './MoviePage';

describe('MoviePage', () => {
    it('should render correctly', () => {
        const movieId = 354912;
        const Films = { data: [] };
        const fakeFunction = () => {};

        const component = shallow(<MoviePage
            movieId={movieId}
            films={Films.data}
            routeToHomePage={fakeFunction}
            goToMoviePage={fakeFunction}/>);

        expect(component).toMatchSnapshot();
    });
});
