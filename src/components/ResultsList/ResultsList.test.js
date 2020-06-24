import React from 'react';
import { shallow } from 'enzyme';

import ResultsList from './ResultsList';

import { filmsData } from '../../../__mocks__/constantsMock';

describe('ResultsList', () => {
    const simpleFakeFunction = () => {};

    it('should render correctly films array', () => {
        const component = shallow(<ResultsList
            resultsAmount={filmsData.length}
            films={filmsData}
            raiseClickEvent={simpleFakeFunction}
        />);

        expect(component).toMatchSnapshot();
    });

    it('should render correctly empty films array', () => {
        const films = [] ;

        const component = shallow(<ResultsList
            resultsAmount={films.length}
            films={films}
            raiseClickEvent={simpleFakeFunction}
        />);

        expect(component).toMatchSnapshot();
    });
});
