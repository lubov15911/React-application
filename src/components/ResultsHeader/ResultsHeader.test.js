import React from 'react';
import { shallow } from 'enzyme';

import ResultsHeader from './ResultsHeader';

describe('ResultsHeader', () => {
    const total = 0;
    const sortOption = 'Title';
    const fakeFunction = jest.fn();
    let component;

    beforeEach(() => {
        component = shallow(<ResultsHeader
            resultsAmount={total}
            handleSortOption={fakeFunction}
            sortOption={sortOption}
        />);
    });

    it('should render correctly', () => {
        expect(component).toMatchSnapshot();
    });
});
