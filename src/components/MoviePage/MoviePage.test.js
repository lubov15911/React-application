import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import MoviePage from './MoviePage';
import { moviePreviewData } from '../../../__mocks__/constantsMock';

describe('MoviePage', () => {
    const mockStore = configureStore()({
        movieData: moviePreviewData,
    });

    let component;

    beforeEach(() => {
        mockStore.dispatch = jest.fn();
        component = shallow(<MoviePage store={mockStore} />).dive();
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
