import React from 'react';

import { SearchPanel } from './SearchPanel'; // Functional component + Pure Component
import SearchResults from './SearchResults'; // Component

import './App.scss';

const App = React.createElement(
    'div',
    {
        className: 'app',
    },
    <h1> Hello, World! </h1>,
    <SearchPanel />,
    <SearchResults />,
);

export default App;
