import React from 'react';
import { shallow } from 'enzyme';

import SearchHeader from './SearchHeader';

describe('SearchHeader', () => {
    it('should render correctly with no props', () => {
        const component = shallow(<SearchHeader />);
        expect(component).toMatchSnapshot();
    });
});
