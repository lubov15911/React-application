import React from 'react';
import { shallow } from 'enzyme';

import ResultsHeader from './ResultsHeader';

import { filmsData, searchOptionsData } from '../../../__mocks__/constantsMock';

describe('ResultsHeader', () => {
    const spyFakeFunction = jest.fn();

    let component;

    beforeEach(() => {
        component = shallow(<ResultsHeader
            resultsAmount={filmsData.length}
            handleSortOption={spyFakeFunction}
            sortOption={searchOptionsData.title}
        />);
    });

    it('should render correctly', () => {
        expect(component).toMatchSnapshot();
    });
});
