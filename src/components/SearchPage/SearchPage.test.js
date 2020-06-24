import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import SearchPage from './SearchPage';

describe('SearchPage', () => {
    const mockStore = configureStore()({});

    let component;

    beforeEach(() => {
        mockStore.dispatch = jest.fn();
        component = shallow(<SearchPage store={mockStore} />).dive();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should render correctly', () => {
        expect(component).toMatchSnapshot();
    });

    it('should dispatch event to request data', () => {
        expect(mockStore.dispatch).toHaveBeenCalledTimes(1);
        // TODO: There is async action should be called here. Check it properly later
        expect(mockStore.dispatch).toHaveBeenCalledWith(expect.any(Function));
    });
});
