import React from 'react';
import { shallow } from 'enzyme';

import SearchPage from './SearchPage';

describe('SearchPage', () => {
    it('should render correctly', () => {
        const items = [{
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
        const fakeFunction = () => {};

        const component = shallow(<SearchPage
            films={items}
            routeToHomePage={fakeFunction}
            goToMoviePage={fakeFunction}
        />);

        expect(component).toMatchSnapshot();
    });
});
