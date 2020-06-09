import React from 'react';
import { shallow } from 'enzyme';

import SearchBar from './SearchBar';

describe('SearchBar', () => {
    it('should render correctly', () => {
        const fakeFunction = () => {};

        const component = shallow(<SearchBar handleSubmit={fakeFunction} />);
        expect(component).toMatchSnapshot();
    });
});
