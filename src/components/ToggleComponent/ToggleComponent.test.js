import React from 'react';
import { shallow } from 'enzyme';

import ToggleComponent from './ToggleComponent';

import { sortOptionsData } from '../../../__mocks__/constantsMock';

describe('ToggleComponent', () => {
    const toggleType = 'Sort';
    const spyFakeFunction = jest.fn();

    let component;

    beforeEach(() => {
        component = shallow(<ToggleComponent
            toggleType={toggleType}
            options={sortOptionsData}
            selected={sortOptionsData.release}
            handleToggle={spyFakeFunction}
        />);
    });

    it('should render correctly', () => {
        expect(component).toMatchSnapshot();
    });

    it('should call handleToggle from props', () => {
        component.find(`input#second-option-${toggleType}`).props().onChange();
        expect(spyFakeFunction).toHaveBeenCalled();
    });
});
