import React from 'react';
import { shallow } from 'enzyme';

import ResultsHeader from './ResultsHeader';

describe('ResultsHeader', () => {
    const total = 0;
    const fakeFunction = jest.fn();
    let component;

    beforeEach(() => {
        component = shallow(<ResultsHeader
            totalResults={total}
            handleSortOption={fakeFunction}
        />);
    });

    it('should render correctly', () => {
        expect(component).toMatchSnapshot();
    });

    it('should change searchOption state', () => {
        component.find('ToggleComponent').props().handleToggle();
        expect(component.state().sortOption).toBe('Rating');
        component.find('ToggleComponent').props().handleToggle();
        expect(component.state().sortOption).toBe('Release date');
    });

    it('should raise sort option', () => {
        component.find('ToggleComponent').props().handleToggle();
        expect(fakeFunction).toHaveBeenCalledWith('Rating');
    });
});
