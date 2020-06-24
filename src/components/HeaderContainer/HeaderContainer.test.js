import React from 'react';
import { shallow } from 'enzyme';

import HeaderContainer from './HeaderContainer';

import { moviePreviewData } from '../../../__mocks__/constantsMock';

describe('HeaderContainer', () => {
    it('should render correctly', () => {
        const simpleFakeFunction = () => {};

        const component = shallow(<HeaderContainer
            movieData={moviePreviewData}
            handleSearchValue={simpleFakeFunction}
            handleSearchSubmit={simpleFakeFunction}
            handleToggleSearchCriteria={simpleFakeFunction}
            searchValue={''}
            searchOption={'Title'}
        />);

        expect(component).toMatchSnapshot();
    });
});
