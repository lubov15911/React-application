import React from 'react';
import { shallow } from 'enzyme';

import ResultsHeader from './ResultsHeader';

describe('ResultsHeader', () => {
    it('should render correctly', () => {
        const total = 0;
        const fakeFunction = () => {};

        const component = shallow(<ResultsHeader
            totalResults={total}
            handleSortOption={fakeFunction}
        />);

        expect(component).toMatchSnapshot();
    });
});
