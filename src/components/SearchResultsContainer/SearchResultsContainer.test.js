import React from 'react';
import { shallow } from 'enzyme';

import SearchResultsContainer from './SearchResultsContainer';

describe('SearchResultsContainer', () => {
    const fakeFunction = () => {};
    const films = [{
        id: 354912,
        poster_path: 'https://image.tmdb.org/t/p/w500/eKi8dIrr8voobbaGzDpe8w0PVbC.jpg',
        title: 'Coco',
        release_date: '2017-10-27',
        genres: ["Adventure", "Comedy", "Family", "Animation"],
    }, {
        id: 333339,
        poster_path: 'https://image.tmdb.org/t/p/w500/pU1ULUq8D3iRxl1fdX2lZIzdHuI.jpg',
        title: 'Ready Player One',
        release_date: '2018-03-28',
        genres: ["Adventure", "Science Fiction", "Action"],
    }] ;

    it('should render correctly films array', () => {
        const component = shallow(<SearchResultsContainer
            total={films.length}
            films={films}
            raiseClickEvent={fakeFunction}
        />);

        expect(component).toMatchSnapshot();
    });

    // TODO: Update test when state change is implemented
    it('should update sort options', () => {
        const spy = jest.spyOn(SearchResultsContainer, 'updateSortOption');

        const component = shallow(<SearchResultsContainer
            total={films.length}
            films={films}
            raiseClickEvent={fakeFunction}
        />);

        component.find('ResultsHeader').props().handleSortOption('Title');
        expect(spy).toHaveBeenCalled();
    });
});
