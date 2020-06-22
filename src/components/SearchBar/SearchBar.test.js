import React from 'react';
import { shallow } from 'enzyme';

import SearchBar from './SearchBar';

describe('SearchBar', () => {
    const fakeFunctionSubmit = jest.fn();
    const fakeFunctionSearchValue= jest.fn();
    const searchValue = 'Tarantino';
    let changeEvent;
    let component;

    beforeEach(() => {
        changeEvent = { target: { value: searchValue } };
        component = shallow(<SearchBar
            searchValue={searchValue}
            handleSubmit={fakeFunctionSubmit}
            handleSearchValue={fakeFunctionSearchValue} />);
    });

    it('should render correctly', () => {
        expect(component).toMatchSnapshot();
    });

    it('should change value state', () => {
        component.find('input').simulate('change', changeEvent);
        expect(fakeFunctionSearchValue).toHaveBeenCalledWith(searchValue);
    });

    it('should submit current search value', () => {
        const submitEvent = { preventDefault: () => {} };
        component.find('input').simulate('change', changeEvent);
        component.find('form').simulate('submit', submitEvent);
        expect(fakeFunctionSubmit).toHaveBeenCalledWith(searchValue);
    });
});
