import React from 'react';
import { shallow } from 'enzyme';

import HeaderContainer from './HeaderContainer';

describe('HeaderContainer', () => {
    it('should render correctly', () => {
        const fakeFunction = () => {};

        const component = shallow(<HeaderContainer />);

        expect(component).toMatchSnapshot();
    });
});
