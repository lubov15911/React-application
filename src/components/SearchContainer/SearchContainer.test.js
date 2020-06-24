import React from 'react';
import { shallow } from 'enzyme';

import SearchContainer from './SearchContainer';

import { searchValueData, searchOptionsData } from '../../../__mocks__/constantsMock';

describe('SearchContainer', () => {
    const simpleFakeFunction = () => {};
    const spyFakeFunctionSearchSubmit = jest.fn();

    let component;

    beforeEach(() => {
        component = shallow(<SearchContainer
            handleSearchValue={simpleFakeFunction}
            handleSearchSubmit={spyFakeFunctionSearchSubmit}
            toggleSearch={simpleFakeFunction}
            searchOption={searchOptionsData.title}
            searchValue={searchValueData}
        />);
    });

    it('should render correctly with props', () => {
        expect(component).toMatchSnapshot();
    });

    it('should change state of error - true', () => {
        let error;
        try {
            component.find('SearchBar').props().handleSubmit('error');
            expect(component.state().error).toBeTruthy();
        } catch (e) {
            error = e;
        }
        expect(error).toBeInstanceOf(Error);
    });

    it('should change state of error - false', () => {
        let error;
        try {
            component.find('SearchBar').props().handleSubmit(searchValueData);
            expect(component.state().error).toBeFalsy();
        } catch (e) {
            error = e;
        }
        expect(error).not.toBeInstanceOf(Error);
    });

    it('should call search request', () => {
        component.find('SearchBar').props().handleSubmit(searchValueData);
        expect(spyFakeFunctionSearchSubmit).toHaveBeenCalledWith(searchValueData.toLocaleLowerCase());
    });
});
