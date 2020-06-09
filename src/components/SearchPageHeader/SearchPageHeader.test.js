import React from 'react';
import { shallow } from 'enzyme';

import SearchPageHeader from './SearchPageHeader';

describe('SearchPageHeader', () => {
    it('should render correctly', () => {
        const fakeFunction = () => {};

        const component = shallow(<SearchPageHeader routeToHomePage={fakeFunction} />);
        expect(component).toMatchSnapshot();
    });
});
