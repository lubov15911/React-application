import React from 'react';
import { shallow } from 'enzyme';

import MoviePage from './MoviePage';

describe('MoviePage', () => {
    const movieId = 354912;
    const Films = { data: [] };
    const simpleFakeFunction = () => {};

    let component;

    beforeEach(() => {
        component = shallow(<MoviePage
            movieId={movieId}
            films={Films.data}
            routeToHomePage={simpleFakeFunction}
            goToMoviePage={simpleFakeFunction}/>);
    });

    it('should render correctly', () => {
        expect(component).toMatchSnapshot();
    });

    it('should change sortOption state', () => {
        component.find('SearchResultsContainer').props().handleSortOption();
        expect(component.state().sortOption).toBe('Rating');
        component.find('SearchResultsContainer').props().handleSortOption();
        expect(component.state().sortOption).toBe('Release date');
    });
});
