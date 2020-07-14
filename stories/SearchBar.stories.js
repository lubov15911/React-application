import React from 'react';

import { storiesOf } from '@storybook/react';

import SearchBar from '../src/components/SearchBar';
import configureStore from "../src/store";

const store = configureStore();

const SearchBarComponent = () => (
    <SearchBar store={store} />);

storiesOf('SearchBar', module)
    .add('SearchBar', SearchBarComponent);
