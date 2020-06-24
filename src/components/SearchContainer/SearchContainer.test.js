import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import SearchContainer from './SearchContainer';

import { updateSearchOption } from '../../actions';
import { searchValueData, searchOptionsData } from '../../../__mocks__/constantsMock';

describe('SearchContainer', () => {
    const mockStore = configureStore()({
        searchOption: searchOptionsData.title,
        searchValue: searchValueData,
    });
    const changeEvent = { currentTarget: { value: searchOptionsData.genre } };

    let component;

    beforeEach(() => {
        mockStore.dispatch = jest.fn();
        component = shallow(<SearchContainer store={mockStore} />).dive();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should render correctly with props', () => {
        expect(component).toMatchSnapshot();
    });

    it('should dispatch search request', () => {
        component.find('ToggleComponent').props().handleToggle(changeEvent);
        expect(mockStore.dispatch).toHaveBeenCalledTimes(2);
        expect(mockStore.dispatch).toHaveBeenNthCalledWith(1, updateSearchOption(searchOptionsData.genre));
        // TODO: There is async action should be called here. Check it properly later
        expect(mockStore.dispatch).toHaveBeenNthCalledWith(2, expect.any(Function));
    });
});
