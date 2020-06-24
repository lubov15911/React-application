import React from 'react';
import { shallow } from 'enzyme';

import SearchBar from './SearchBar';

import { searchValueData } from '../../../__mocks__/constantsMock';

describe('SearchBar', () => {
    const spyFakeFunctionSubmit = jest.fn();
    const spyFakeFunctionSearchValue= jest.fn();

    let changeEvent;
    let component;

    beforeEach(() => {
        changeEvent = { target: { value: searchValueData } };
        component = shallow(<SearchBar
            searchValue={searchValueData}
            handleSubmit={spyFakeFunctionSubmit}
            handleSearchValue={spyFakeFunctionSearchValue} />);
    });

    it('should render correctly', () => {
        expect(component).toMatchSnapshot();
    });

    it('should change value state', () => {
        component.find('input').simulate('change', changeEvent);
        expect(spyFakeFunctionSearchValue).toHaveBeenCalledWith(searchValueData);
    });

    it('should submit current search value', () => {
        const submitEvent = { preventDefault: () => {} };
        component.find('input').simulate('change', changeEvent);
        component.find('form').simulate('submit', submitEvent);
        expect(spyFakeFunctionSubmit).toHaveBeenCalledWith(searchValueData);
    });
});
