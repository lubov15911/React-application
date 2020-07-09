// @flow

import React from 'react';

import './ToggleComponent.scss';

const ToggleComponent = ({ selected, toggleType, options, handleToggle, }: {
    selected: string,
    toggleType: string,
    options: {
        first: string,
        second: string
    },
    handleToggle: () => void,
}) => {
    const isChecked = option => selected === option;

    return (
        <div className="toggler">
            <p>
                {toggleType}
                By
            </p>
            <input
                type="radio"
                id={`first-option-${toggleType}`}
                name={`toggler-${toggleType}`}
                value={options.first}
                checked={isChecked(options.first)}
                onChange={handleToggle}
            />
            <label htmlFor={`first-option-${toggleType}`}>{options.first}</label>
            <input
                type="radio"
                id={`second-option-${toggleType}`}
                name={`toggler-${toggleType}`}
                value={options.second}
                checked={isChecked(options.second)}
                onChange={handleToggle}
            />
            <label htmlFor={`second-option-${toggleType}`}>{options.second}</label>
        </div>
    );
};

export default ToggleComponent;
