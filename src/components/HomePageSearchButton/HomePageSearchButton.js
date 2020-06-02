import React from 'react';
import PropTypes from 'prop-types';

import './HomePageSearchButton.scss'

const HomePageSearchButton = (props) => {
    const { handleClick } = props;
    return (<button className="home-page-btn" onClick={handleClick} type="button">Search icon</button>);
};
HomePageSearchButton.propTypes = {
    handleClick: PropTypes.func.isRequired,
};

export default HomePageSearchButton;
