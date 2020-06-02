import React from 'react';

import './ToggleComponent.scss';

const ToggleComponent = (props) => {
    function isChecked(option) {
        return props.selected === option;
    }

    return (
        <div className="toggler">
            <p>{props.toggleType} By</p>
            <input type="radio"
                   id={`first-option-${props.toggleType}`}
                   name={`toggler-${props.toggleType}`}
                   value={props.options.first}
                   checked={isChecked(props.options.first)}
                   onChange={props.handleToggle} />
            <label htmlFor={`first-option-${props.toggleType}`}>{props.options.first}</label>
            <input type="radio"
                   id={`second-option-${props.toggleType}`}
                   name={`toggler-${props.toggleType}`}
                   value={props.options.second}
                   checked={isChecked(props.options.second)}
                   onChange={props.handleToggle} />
            <label htmlFor={`second-option-${props.toggleType}`}>{props.options.second}</label>
        </div>
    );
};
export default ToggleComponent;
