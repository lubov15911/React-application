// @flow

import React from 'react';
import { createUseStyles } from 'react-jss';

import * as Colors from '../../constants/colors';

const useStyles = createUseStyles({
    toggler: {
        display: 'flex',
        margin: {
            top: '1em',
            right: 0,
            bottom: '1em',
            left: 0,
        },
        fontSize: '1.5em',
        lineHeight: '2.5em',
        textTransform: 'uppercase',
        opacity: 0.8,
    },
    togglerType: {
        marginRight: '1em',
    },
    togglerInput: {
        display: 'none',

        '&:checked + label': {
            backgroundColor: Colors.Pink,
        },
    },
    togglerLabel: {
        borderRadius: '0.4em 0 0 0.4em',
        backgroundColor: Colors.TransparentGray,
        padding: '0 1em',
        cursor: 'pointer',

        '&:last-child': {
            borderRadius: '0 0.4em 0.4em 0',
        },
    }
});

const ToggleComponent = ({ selected, toggleType, options, handleToggle, }: {
    selected: string,
    toggleType: string,
    options: {
        first: string,
        second: string
    },
    handleToggle: () => void,
}) => {
    const classes = useStyles();
    const isChecked = option => selected === option;

    return (
        <div className={classes.toggler}>
            <p className={classes.togglerType}>
                {toggleType}
                By
            </p>
            <input
                className={classes.togglerInput}
                type="radio"
                id={`first-option-${toggleType}`}
                name={`toggler-${toggleType}`}
                value={options.first}
                checked={isChecked(options.first)}
                onChange={handleToggle}
            />
            <label
                className={classes.togglerLabel}
                htmlFor={`first-option-${toggleType}`}>{options.first}</label>
            <input
                className={classes.togglerInput}
                type="radio"
                id={`second-option-${toggleType}`}
                name={`toggler-${toggleType}`}
                value={options.second}
                checked={isChecked(options.second)}
                onChange={handleToggle}
            />
            <label
                className={classes.togglerLabel}
                htmlFor={`second-option-${toggleType}`}>{options.second}</label>
        </div>
    );
};

export default ToggleComponent;
