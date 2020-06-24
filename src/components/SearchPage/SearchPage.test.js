import React from 'react';
import { shallow } from 'enzyme';

import SearchPage from './SearchPage';

import {
    filmsData,
    searchValueData,
    searchOptionsData,
    sortOptionsData
} from '../../../__mocks__/constantsMock';

describe('SearchPage', () => {
    const simpleFakeFunction = () => {};

    let component;

    beforeEach(() => {
        component = shallow(<SearchPage
            films={filmsData}
            routeToHomePage={simpleFakeFunction}
            goToMoviePage={simpleFakeFunction}
        />);
    });

    it('should render correctly', () => {
        expect(component).toMatchSnapshot();
    });

    it('should change searchOption state', () => {
        component.find('HeaderContainer').props().handleToggleSearchCriteria();
        expect(component.state().searchOption).toBe(searchOptionsData.genre);
        component.find('HeaderContainer').props().handleToggleSearchCriteria();
        expect(component.state().searchOption).toBe(searchOptionsData.title);
    });

    it('should change sortOption state', () => {
        component.find('SearchResultsContainer').props().handleSortOption();
        expect(component.state().sortOption).toBe(sortOptionsData.rating);
        component.find('SearchResultsContainer').props().handleSortOption();
        expect(component.state().sortOption).toBe(sortOptionsData.release);
    });

    describe('should change searchResults to', () => {
        it('default array', () => {
            component.find('HeaderContainer').props().handleSearchSubmit('');
            expect(component.state().results).toEqual(expect.arrayContaining(filmsData));
        });

        it('search array', () => {
            component.find('HeaderContainer').props().handleSearchSubmit(searchValueData);
            expect(component.state().results).toEqual(expect.arrayContaining([filmsData[1]]));
        });
    });
});
