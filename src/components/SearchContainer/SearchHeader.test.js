import React from 'react';
import { shallow } from 'enzyme';

import SearchHeader from './SearchHeader';

describe('SearchHeader', () => {
    let component;

    beforeEach(() => {
        component = shallow(<SearchHeader />);
    });

    it('should render correctly with no props', () => {
        expect(component).toMatchSnapshot();
    });

    it('should change searchOption state', () => {
        component.find('ToggleComponent').props().handleToggle();
        expect(component.state().searchOption).toBe('Genre');
        component.find('ToggleComponent').props().handleToggle();
        expect(component.state().searchOption).toBe('Title');
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
});
