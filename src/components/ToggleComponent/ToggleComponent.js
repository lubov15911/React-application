import React from 'react';
import PropTypes from 'prop-types';

import './ToggleComponent.scss';

const PROP_TYPES = {
    selected: PropTypes.string.isRequired,
    toggleType: PropTypes.string.isRequired,
    options: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
    handleToggle: PropTypes.func.isRequired,
};

const ToggleComponent = ({ selected, toggleType, options, handleToggle, }) => {
    function isChecked(option) {
        return selected === option;
    }

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
ToggleComponent.propTypes = PROP_TYPES;

export default ToggleComponent;
