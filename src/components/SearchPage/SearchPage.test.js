import React from 'react';
import { shallow } from 'enzyme';

import SearchPage from './SearchPage';

describe('SearchPage', () => {
    const items = [{
        id: 354912,
        poster_path: 'https://image.tmdb.org/t/p/w500/eKi8dIrr8voobbaGzDpe8w0PVbC.jpg',
        title: 'Coco',
        release_date: '2017-10-27',
        genres: ["Adventure", "Comedy", "Family", "Animation"],
    }, {
        id: 333339,
        poster_path: 'https://image.tmdb.org/t/p/w500/pU1ULUq8D3iRxl1fdX2lZIzdHuI.jpg',
        title: 'Ready Player One',
        release_date: '2018-03-28',
        genres: ["Adventure", "Science Fiction", "Action"],
    }] ;
    const fakeFunction = () => {};

    let component;

    beforeEach(() => {
        component = shallow(<SearchPage
            films={items}
            routeToHomePage={fakeFunction}
            goToMoviePage={fakeFunction}
        />);
    });

    it('should render correctly', () => {
        expect(component).toMatchSnapshot();
    });

    it('should change searchOption state', () => {
        component.find('HeaderContainer').props().handleToggleSearchCriteria();
        expect(component.state().searchOption).toBe('Genre');
        component.find('HeaderContainer').props().handleToggleSearchCriteria();
        expect(component.state().searchOption).toBe('Title');
    });

    it('should change sortOption state', () => {
        component.find('SearchResultsContainer').props().handleSortOption();
        expect(component.state().sortOption).toBe('Rating');
        component.find('SearchResultsContainer').props().handleSortOption();
        expect(component.state().sortOption).toBe('Release date');
    });

    describe('should change searchResults to', () => {
        it('default array', () => {
            component.find('HeaderContainer').props().handleSearchSubmit('');
            expect(component.state().results).toEqual(expect.arrayContaining(items));
        });

        it('search array', () => {
            component.find('HeaderContainer').props().handleSearchSubmit('ready');
            expect(component.state().results).toEqual(expect.arrayContaining([items[1]]));
        });
    });
});