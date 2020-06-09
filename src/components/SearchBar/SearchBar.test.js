import React from 'react';
import { shallow } from 'enzyme';

import SearchBar from './SearchBar';

describe('SearchBar', () => {
    const fakeFunction = jest.fn();
    const searchValue = 'Tarantino';
    const changeEvent = { target: { value: searchValue } };
    let component;

    beforeEach(() => {
        component = shallow(<SearchBar handleSubmit={fakeFunction} />);
    });

    it('should render correctly', () => {
        expect(component).toMatchSnapshot();
    });

    it('should change value state', () => {
        const searchValue = 'Tarantino';
        component.find('input').simulate('change', changeEvent);
        expect(component.state().value).toBe(searchValue);
    });

    it('should submit current search value', () => {
        const submitEvent = { preventDefault: () => {} };
        component.find('input').simulate('change', changeEvent);
        component.find('form').simulate('submit', submitEvent);
        expect(fakeFunction).toHaveBeenCalledWith(searchValue);
    });
});
