import React from 'react';
import { shallow } from 'enzyme';

import EmptyList from './EmptyList';

describe('EmptyList', () => {
    it('should render correctly with no props', () => {
        const component = shallow(<EmptyList />);

        expect(component).toMatchSnapshot();
    });
});
