import React from 'react';

import { storiesOf } from '@storybook/react';

import ToggleComponent from '../src/components/ToggleComponent';
import { SearchOptions, SortOptions } from "../src/constants";

const handleOption = ({ currentTarget: { value } }) => {
    console.log('toggle to', value);
};

const SortFirstSelectedComponent = () => (
    <ToggleComponent
        toggleType="Sort "
        options={SortOptions}
        selected={SortOptions.first}
        handleToggle={handleOption} />);

const SortSecondSelectedComponent = () => (
    <ToggleComponent
        toggleType="Sort "
        options={SortOptions}
        selected={SortOptions.second}
        handleToggle={handleOption} />);

const SearchFirstSelectedComponent = () => (
    <ToggleComponent
        toggleType="Search "
        options={SearchOptions}
        selected={SearchOptions.first}
        handleToggle={handleOption} />);

const SearchSecondSelectedComponent = () => (
    <ToggleComponent
        toggleType="Search "
        options={SearchOptions}
        selected={SearchOptions.second}
        handleToggle={handleOption} />);

storiesOf('ToggleComponent', module)
    .add('Sort type: first selected', SortFirstSelectedComponent)
    .add('Sort type: second selected', SortSecondSelectedComponent)
    .add('Search type: first selected', SearchFirstSelectedComponent)
    .add('Search type: second selected', SearchSecondSelectedComponent);
