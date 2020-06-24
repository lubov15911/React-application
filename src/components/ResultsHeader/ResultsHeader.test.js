import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import ResultsHeader from './ResultsHeader';

import { updateSortOption } from '../../actions';
import { filmsData, sortOptionsData, moviePreviewData } from '../../../__mocks__/constantsMock';

describe('ResultsHeader', () => {
    let mockStore, initState, component;

    beforeEach(() => {
        initState = {
            films: filmsData,
            sortOption: sortOptionsData.release,
            movieData: moviePreviewData,
        };
    });

    it('should render correctly without movieData', () => {
        initState.movieData = null;
        mockStore = configureStore()(initState);
        component = shallow(<ResultsHeader store={mockStore} />).dive();

        expect(component).toMatchSnapshot();
    });

    it('should render correctly with movieData', () => {
        mockStore = configureStore()(initState);
        component = shallow(<ResultsHeader store={mockStore} />).dive();

        expect(component).toMatchSnapshot();
    });

    it('should handle toggle option', () => {
        const toggleEvent = { currentTarget: { value: sortOptionsData.rating } };

        mockStore = configureStore()(initState);
        mockStore.dispatch = jest.fn();

        component = shallow(<ResultsHeader store={mockStore} />).dive();
        component.find('ToggleComponent').props().handleToggle(toggleEvent);

        expect(mockStore.dispatch).toHaveBeenCalledWith(updateSortOption(sortOptionsData.rating));

        jest.clearAllMocks();
    });
});
