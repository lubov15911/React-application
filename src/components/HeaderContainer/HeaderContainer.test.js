import React from 'react';
import { shallow } from 'enzyme';

import HeaderContainer from './HeaderContainer';

describe('HeaderContainer', () => {
    it('should render correctly', () => {
        const fakeFunction = () => {};
        const mockData = {
            poster_path: 'https://image.tmdb.org/t/p/w500/eKi8dIrr8voobbaGzDpe8w0PVbC.jpg',
            title: 'Coco',
            vote_average: 7.8,
            tagline: 'The celebration of a lifetime',
            release_date: '2017-10-27',
            runtime: 105,
            overview: 'Despite his family’s baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz.',
        };

        const component = shallow(<HeaderContainer
            movieData={mockData}
            handleSearchValue={fakeFunction}
            handleSearchSubmit={fakeFunction}
            handleToggleSearchCriteria={fakeFunction}
            searchValue={''}
            searchOption={'Title'}
        />);

        expect(component).toMatchSnapshot();
    });
});
