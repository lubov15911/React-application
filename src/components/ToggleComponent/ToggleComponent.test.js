import React from 'react';
import { shallow } from 'enzyme';

import ToggleComponent from './ToggleComponent';

describe('ToggleComponent', () => {
    const toggleType = 'Sort';
    const SortOptions = {
        first: 'Release date',
        second: 'Rating'
    };
    const fakeFunction = jest.fn();
    let component;

    beforeEach(() => {
        component = shallow(<ToggleComponent
            toggleType={toggleType}
            options={SortOptions}
            selected={SortOptions.first}
            handleToggle={fakeFunction}
        />);
    });

    it('should render correctly', () => {
        expect(component).toMatchSnapshot();
    });

    it('should call handleToggle from props', () => {
        component.find(`input#second-option-${toggleType}`).props().onChange();
        expect(fakeFunction).toHaveBeenCalled();
    });
});
