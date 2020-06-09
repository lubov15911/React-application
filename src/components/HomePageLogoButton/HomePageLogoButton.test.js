import React from 'react';
import { shallow } from 'enzyme';

import HomePageLogoButton from './HomePageLogoButton';

describe('HomePageLogoButton', () => {
    it('should render correctly', () => {
        let routeToHomePage = () => {};
        const component = shallow(<HomePageLogoButton handleClick={routeToHomePage} />);

        expect(component).toMatchSnapshot();
    });
});
