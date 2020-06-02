import React from 'react';
import PropTypes from 'prop-types';

import './HomePageLogoButton.scss'

const HomePageLogoButton = (props) => {
    const { handleClick } = props;
    return (<button className="home-page-btn" onClick={handleClick} type="button"><b>netflix</b>roulette</button>);
};
HomePageLogoButton.propTypes = {
    handleClick: PropTypes.func.isRequired,
};

export default HomePageLogoButton;
