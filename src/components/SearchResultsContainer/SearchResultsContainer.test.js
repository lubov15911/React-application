import React from 'react';
import { shallow } from 'enzyme';

import SearchResultsContainer from './SearchResultsContainer';

import { filmsData, searchOptionsData } from '../../../__mocks__/constantsMock';

describe('SearchResultsContainer', () => {
    it('should render correctly films array', () => {
        const simpleFakeFunction = () => {};

        const component = shallow(<SearchResultsContainer
            total={filmsData.length}
            films={filmsData}
            sortOption={searchOptionsData.title}
            handleSelectMovie={simpleFakeFunction}
            handleSortOption={simpleFakeFunction} />);

        expect(component).toMatchSnapshot();
    });
});
