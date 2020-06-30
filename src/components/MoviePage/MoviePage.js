import React, { Fragment } from 'react';

import HeaderContainer from '../HeaderContainer';
import ResultsHeader from '../ResultsHeader';
import ResultsList from '../ResultsList';

const MoviePage = () => (
    <Fragment>
        <HeaderContainer />
        <ResultsHeader />
        <ResultsList />
    </Fragment>
);

export default MoviePage;
