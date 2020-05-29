import React from 'react';

import { SearchPanel } from './SearchPanel.js'; // Functional component + Pure Component
import { SearchResults } from './SearchResults.js'; // Component

import './App.scss';

export let App = React.createElement(
    'div',
    {
        className: 'app'
    },
    <h1> Hello, World! </h1>,
    <SearchPanel />,
    <SearchResults />
);
