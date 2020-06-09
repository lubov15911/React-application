import React from 'react';
import { shallow } from 'enzyme';

import ToggleComponent from './ToggleComponent';

describe('SearchHeader', () => {
    it('should render correctly', () => {
        const toggleType = 'Sort';
        const SortOptions = {
            first: 'Release date',
            second: 'Rating'
        };
        const fakeFunction = () => {};

        const component = shallow(<ToggleComponent
            toggleType='Sort'
            options={SortOptions}
            selected={SortOptions.first}
            handleToggle={fakeFunction}
        />);

        expect(component).toMatchSnapshot();
    });
});
