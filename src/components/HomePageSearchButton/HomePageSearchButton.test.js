import React from 'react';
import { shallow } from 'enzyme';

import HomePageSearchButton from './HomePageSearchButton';

describe('HomePageSearchButton', () => {
    it('should render correctly', () => {
        let routeToHomePage = () => {};
        const component = shallow(<HomePageSearchButton handleClick={routeToHomePage} />);

        expect(component).toMatchSnapshot();
    });
});
