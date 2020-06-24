import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import SearchBar from './SearchBar';

import { updateSearchValue } from '../../actions';

import { searchValueData, searchOptionsData, sortOptionsData } from '../../../__mocks__/constantsMock';

describe('SearchBar', () => {
    const mockStore = configureStore()({
        searchOption: searchOptionsData.title,
        sortOption: sortOptionsData.release,
        searchValue: searchValueData,
    });

    let changeEvent;
    let component;

    beforeEach(() => {
        mockStore.dispatch = jest.fn();
        changeEvent = { target: { value: searchValueData } };

        component = shallow(<SearchBar store={mockStore} />).dive();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should render correctly', () => {
        expect(component).toMatchSnapshot();
    });

    it('should dispatch search value changing', () => {
        component.find('input').simulate('change', changeEvent);
        expect(mockStore.dispatch).toHaveBeenCalledWith(updateSearchValue(searchValueData));
    });

    it('should submit current search value', () => {
        const submitEvent = { preventDefault: () => {} };
        component.find('form').simulate('submit', submitEvent);
        // TODO: There is async action should be called here. Check it properly later
        expect(mockStore.dispatch).toHaveBeenCalledWith(expect.any(Function));
    });
});
