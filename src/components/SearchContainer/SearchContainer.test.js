import React from 'react';
import { shallow } from 'enzyme';

import SearchContainer from './SearchContainer';

describe('SearchContainer', () => {
    let component;
    const fakeFunction = () => {};
    const fakeSearchOption = 'Title';
    const fakeSearchValue = '';
    const fakeHandleSearchSubmit = jest.fn();

    beforeEach(() => {
        component = shallow(<SearchContainer
            handleSearchValue={fakeFunction}
            handleSearchSubmit={fakeHandleSearchSubmit}
            toggleSearch={fakeFunction}
            searchOption={fakeSearchOption}
            searchValue={fakeSearchValue}
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
            component.find('SearchBar').props().handleSubmit('Lubov');
            expect(component.state().error).toBeFalsy();
        } catch (e) {
            error = e;
        }
        expect(error).not.toBeInstanceOf(Error);
    });

    it('should call search request', () => {
        let searchValue = 'Lubov';
        component.find('SearchBar').props().handleSubmit(searchValue);
        expect(fakeHandleSearchSubmit).toHaveBeenCalledWith(searchValue.toLocaleLowerCase());
    });
});
